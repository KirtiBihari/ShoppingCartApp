import React from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import './ShoppingList.scss';

const shoppingList = (props) => {
    let itemList = props.itemList.map((item, index)=>{
        return(
            <ShoppingItem item={item} key={index} addToCartClick={props.itemClick} />
        )
    });


    return (
        <div className='shoppingList'>
            {itemList}
        </div>
    );
}

export default shoppingList;