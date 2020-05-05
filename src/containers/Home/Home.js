import React from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import SortList from '../../components/SortList/SortList';
import Filters from '../../components/Filters/Filters';
import { addToCart, updateSort, updatePriceRange, updateFliter } from '../../store/actions/cartActions';
import {isMobile} from 'react-device-detect';


const home = (props) => {
    const handleItemClick = (item) => {
        props.addToCart(item);
    }

    const handleSorting = (item) => {
        props.updateSort(item);
    }

    const handleUpdatePriceRange = (item) => {
        props.updatePriceRange(item);
    }

    const handleApplyFilter = () => {
        props.updateFliter(props.priceRange);
    }

    return (
        <div className='homeContainer'>
            {!isMobile && <Filters
                priceRange={props.priceRange}
                updatePriceRange={handleUpdatePriceRange}
                applyFilter={handleApplyFilter}
            />}
            <div className='sortShoppingContainer'>
                {!isMobile && <SortList sortOptionList={props.sortOptionList} handleSorting={handleSorting} />}
                <ShoppingList itemList={props.shoppingItemList} itemClick={handleItemClick} />
            </div>
        </div>
    );
}

const mapStateToProps = (state)=> {
    return {
      shoppingItemList: state.shoppingItemList,
      sortOptionList: state.sortOptionList,
      priceRange: state.priceRange
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (item)=>{dispatch(addToCart(item))},
        updateSort: (item)=>{dispatch(updateSort(item))},
        updateFliter: (value)=>{dispatch(updateFliter(value))},
        updatePriceRange: (value)=>{dispatch(updatePriceRange(value))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);