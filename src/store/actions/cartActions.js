export const addToCart= (item)=>{
    return {
        type: 'ADD_TO_CART',
        item 
    }
}

export const updateCart= (item, isAdd)=>{
    return {
        type: 'UPDATE_CART',
        data: { item, isAdd }
    }
}

export const removeFromCart= (item)=>{
    return {
        type: 'REMOVE_FROM_CART',
        item 
    }
}

export const updateSort= (item)=>{
    return {
        type: 'UPDATE_SORT',
        item
    }
}

export const updateFliter= (priceRangeVal)=>{
    return {
        type: 'UPDATE_FILTER',
        priceRangeVal
    }
}

export const updatePriceRange= (value)=>{
    return {
        type: 'UPDATE_PRICE_RANGE',
        value
    }
}

export const searchApply= (value)=>{
    return {
        type: 'SEARCH_APPLY',
        value
    }
}
