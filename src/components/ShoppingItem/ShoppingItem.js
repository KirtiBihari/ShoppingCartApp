import React from 'react';
import './ShoppingItem.scss';
import ItemDetails from '../ItemDetails/ItemDetails';

const shoppingItem = (props) => {

    return (
        <div className='shoppingItem'>
            <img src={props.item.image} alt={props.item.name} />
            <ItemDetails item={props.item} />
            <button onClick={() => props.addToCartClick(props.item)} >Add to Cart</button>
        </div>
    );
}

export default shoppingItem;