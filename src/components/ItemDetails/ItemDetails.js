import React from 'react';
import './ItemDetails.scss';

const itemDetails = (props) => {

    return (
        <React.Fragment>
            <div className='itemInfo'>
                <label className='itemName'>{props.item.name}</label>
                <div className='price_offer'>
                    <label className='price'>&#8377;{props.item.price.actual} <del>{props.item.price.display}</del></label>
                    <label className='offer'>{props.item.discount}% off</label>
                </div>
            </div>
        </React.Fragment>
    );
}

export default itemDetails;