import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';
import { searchApply } from '../../store/actions/cartActions';

const header = (props) => {
    const searchFilterApply = (event) => {
        props.searchApply(event.target.value)
    }

    return (
        <div className='headerContainer'>
            <nav className="navbar justify-content-between">
                <Link to="/" className="navbar-brand"><i className="fa fa-star"></i></Link>
                <form className="form-inline">
                    <div className="search" >
                        <input type="text" placeholder='Search' onChange = {(event) => searchFilterApply(event)} /><i className="fa fa-search"></i>
                    </div>
                    <Link to="/cart" className="cartIcon">
    <i className="fa fa-shopping-cart">{props.cartItems.length > 0 ? <span className="badge badge-danger">{props.cartItems.length}</span> : null}</i>
                    </Link>
                </form>
            </nav>
            
        </div>
    );
}

const mapStateToProps = (state)=> {
    return {
      cartItems: state.cartItems
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{
        searchApply: (item)=>{dispatch(searchApply(item))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(header);