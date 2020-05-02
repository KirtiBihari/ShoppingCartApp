import shoppingItemList from '../../assets/data/cart.json';
import { dynamicsort } from '../../shared/utility/utility';

const sortOptionData = [
    {id:1, displayName: 'Price -- High Low', sortKey: 'desc', checked:false},
    {id:2, displayName: 'Price -- Low High', sortKey: 'asc', checked:false},
    {id:3, displayName: 'Discount', sortKey: 'discount', checked:false}
];

// const priceRangeData = (itemList) => {
//     let priceRange = {
//         start: 0,
//         end: 0,
//     };

//     if (itemList.length > 0) {
//         const sortedItemList = itemList.sort(dynamicsort('asc', 'price', 'actual'));
//         priceRange.start = sortedItemList[0].price.actual;
//         priceRange.end = sortedItemList[sortedItemList.length - 1].price.actual;
//     }

//     return priceRange;
// }

const initState = {
    items: [ ...shoppingItemList.items ],
    shoppingItemList: [ ...shoppingItemList.items ],
    cartItems:[],
    total: 0,
    sortOptionList: sortOptionData,
    priceRange: {
        start: 0,
        end: 100000,
    },
    isFilterApplied: false
}




const addToCart = (state, action) => {
    let currentItem = state.shoppingItemList.find(item => item.name === action.item.name);
    let existed_item= state.cartItems.find(item => item.name === action.item.name)
    if(existed_item)
    {
        currentItem['quantity'] += 1;
        return {
            ...state,
            total: state.total + currentItem.price.actual
        }
    }
    else {
        currentItem['quantity'] = 1;
        //calculating the total
        let newTotal = state.total + currentItem.price.actual
        
        return{
            ...state,
            cartItems: [...state.cartItems, currentItem],
            total : newTotal
        }
        
    }
}

const updateCart = (state, action) => {
    let existedCartItem= state.cartItems.find(item=> item.name === action.data.item.name)
    if(existedCartItem)
    {

        if(action.data.isAdd) {
            existedCartItem['quantity'] += 1;
        }
        else {
            if(existedCartItem['quantity'] === 1) {
                let existedItemIndex= state.cartItems.findIndex(item=> item.name === action.data.item.name);
                state.cartItems.splice(existedItemIndex, 1);
            }
            else {
                existedCartItem['quantity'] -= 1;
            }
        }
    }

    return {
        ...state,
        total: action.data.isAdd ? state.total + existedCartItem.price.actual : state.total - existedCartItem.price.actual
    }
}

const removeFromCart = (state, action) => {
    let existedCartItem= state.cartItems.find(item=> item.name === action.item.name);
    let itemPriceByQuantity = 0;
    if(existedCartItem)
    {
        itemPriceByQuantity = existedCartItem.price.actual * existedCartItem['quantity'];
        let existedItemIndex= state.cartItems.findIndex(item=> item.name === action.item.name);
        state.cartItems.splice(existedItemIndex, 1);
    }

    return {
        ...state,
        total: state.total - itemPriceByQuantity
    }
}

const updateSort = (state, action) => {
    let sortOptionList = [ ...state.sortOptionList ];
    let items = [ ...state.shoppingItemList ];
    const priceRangeData = state.priceRange;
    let sortingKey = '';
    sortOptionList.forEach((item, index) => {
        if (action.item.id === item.id) {
            item.checked = true;
            sortingKey = item.sortKey
        }
        else {
            item.checked = false;
        }
    });

    if (sortingKey === 'discount') {
        items = items.sort(dynamicsort(sortingKey, 'discount'));
    }
    else {
        items = items.sort(dynamicsort(sortingKey, 'price', 'actual'));
    }

    if (state.isFilterApplied) {
        items = items.filter((item) => {
            return (item.price.actual >= priceRangeData.start && item.price.actual <= priceRangeData.end)
        });
    }

    return{
        ...state,
        shoppingItemList: items,
        sortOptionList
    }
}

const updateFilter = (state, action) => {
    const priceRangeData = action.priceRangeVal;
    let items = [ ...state.items ];
    const sortOptionList = [ ...state.sortOptionList ];
    const selectedSorting = sortOptionList.filter(item => item.checked === true);
    

    items = items.filter((item) => {
        return (item.price.actual >= priceRangeData.start && item.price.actual <= priceRangeData.end)
    });

    if (selectedSorting.length > 0) {
        items = selectedSorting[0].sortKey === 'discount' ?
            items.sort(dynamicsort(selectedSorting[0].sortKey, 'discount')) :
            items.sort(dynamicsort(selectedSorting[0].sortKey, 'price', 'actual'));
    }

    return{
        ...state,
        shoppingItemList: items,
        isFilterApplied: true
    }
}

const updatePriceRange = (state, action) => {
    return{
        ...state,
        priceRange: action.value
    }
}

const searchApply = (state, action) => {
    const searchText = action.value;
    const priceRangeData = state.priceRange;
    let items = [ ...state.items ];
    const sortOptionList = [ ...state.sortOptionList ];
    const selectedSorting = sortOptionList.filter(item => item.checked === true);
    
    if (searchText.trim().length > 0) {
        items = items.filter((item) => {
            return (item.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
        });
    }

    if (state.isFilterApplied) {
        items = items.filter((item) => {
            return (item.price.actual >= priceRangeData.start && item.price.actual <= priceRangeData.end)
        });
    }

    if (selectedSorting.length > 0) {
        items = selectedSorting[0].sortKey === 'discount' ?
            items.sort(dynamicsort(selectedSorting[0].sortKey, 'discount')) :
            items.sort(dynamicsort(selectedSorting[0].sortKey, 'price', 'actual'));
    }

    return{
        ...state,
        shoppingItemList: items
    }
}


const cartReducer= (state = initState,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
          return addToCart(state, action);
        case 'UPDATE_CART':
          return updateCart(state, action);
        case 'REMOVE_FROM_CART':
          return removeFromCart(state, action);
        case 'UPDATE_SORT':
          return updateSort(state, action);
        case 'UPDATE_FILTER':
          return updateFilter(state, action);
        case 'UPDATE_PRICE_RANGE':
          return updatePriceRange(state, action);
        case 'SEARCH_APPLY':
          return searchApply(state, action);
        default:
          return state;
    }
}

export default cartReducer;