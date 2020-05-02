import React from 'react';
import { connect } from 'react-redux'
import './Cart.scss';
import CartItem from '../../components/CartItem/CartItem';
import PriceInfo from '../../components/PriceInfo/PriceInfo';
import { updateCart, removeFromCart } from '../../store/actions/cartActions';

const cart = (props) => {
    let itemCount = 0, totalDisplayPrice = 0;
    const cartItems = props.cartItemList.map((item, index)=> {
        itemCount += parseInt(item['quantity']);
        totalDisplayPrice += parseInt(item.price.display);
        return(
            <CartItem
                item={item}
                key={index}
                handleUpdateCart={props.updateCart}
                handleRemoveFromCart={props.removeFromCart}
            />
        )
    });
    const PriceInfoProps = {
        itemCount: itemCount,
        totalDisplayPrice: totalDisplayPrice,
        totalDiscountPrice: totalDisplayPrice - props.totalPrice,
        totalPrice: props.totalPrice
    };

    return (
        <div className='cartContainer'>
            <div className='cartItemList'>
                {props.cartItemList.length > 0 ? cartItems : 'No Item in Cart'}
            </div>
            <PriceInfo {...PriceInfoProps} />
        </div> 
    );
}

const mapStateToProps = (state) => {
    return{
        cartItemList: state.cartItems,
        totalPrice:state.total
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{
        updateCart: (item, IsAdd)=>{dispatch(updateCart(item, IsAdd))},
        removeFromCart: (item) => {dispatch(removeFromCart(item))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(cart);
