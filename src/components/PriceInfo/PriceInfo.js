import React from 'react';
import './PriceInfo.scss';

const priceInfo = (props) => {

    return (
        <div className='priceInfoContainer'>
            <label className='heading_lbl'>PRICE DETAILS</label>
            <div className="details">
                <div className='actualPriceInfo'>
                    <span className='lbl'>Price ({props.itemCount} {props.itemCount > 1 ? 'items' : 'item'})</span>
                    <span className='symbol_txt'>:</span>
                    <span className='val'>&#8377;{props.totalDisplayPrice}</span>
                </div>
                <div className='discountPriceInfo'>
                    <span className='lbl'>Discount</span>
                    <span className='symbol_txt'>:</span>
                    <span className='val'>&#8377;{props.totalDiscountPrice}</span>
                </div>  
            </div>
            <div className='totalPriceInfo'>
                <span className='lbl'>Total Payable</span>
                <span className='val'>&#8377;{props.totalPrice}</span>
            </div>
        </div>
    );
}

export default priceInfo;