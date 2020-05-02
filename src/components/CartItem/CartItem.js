import React from 'react';
import './CartItem.scss';
import ItemDetails from '../ItemDetails/ItemDetails';

const cartItem = (props) => {
    return (
        <div className='cartItem'>
            <img src={props.item.image} alt={props.item.name} />
            <div className='itemDetails'>
                <ItemDetails item={props.item} />
                <div className='qtyActions'>
                    <span className='minus' onClick={() => props.handleUpdateCart(props.item, false)} >-</span>
                    <span className='qty'>{props.item.quantity}</span>
                    <span className='plus' onClick={() => props.handleUpdateCart(props.item, true)}>+</span>
                </div>
                <label className='removeLink' onClick={() => props.handleRemoveFromCart(props.item)}>REMOVE</label>
            </div>
            
        </div>
    );
}

export default cartItem;