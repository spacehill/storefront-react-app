import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from "./CartItem";
import { withRouter } from "react-router-dom";

import './Cart.css';

class Cart extends Component {


    handleContinueShopping = () => {
        this.props.history.push('/')
    }

    render() {
        let totalAmount = 0;
        return (
            <div>
                <div>
                    <div className="cart-item-header cart-item-row">
                        <div className="cart-item-cell cart-item-product"><span>Product</span></div>
                        <div className="cart-item-cell cart-item-quantity"><span>Quantity</span></div>
                        <div className="cart-item-cell cart-item-total"><span>Total</span></div>
                        <div className="cart-item-cell cart-item-action"><span>Action</span></div>
                    </div>
                    {this.props.cartItems.map((item, i) => {
                        totalAmount += (item.quantity * item.price);
                        return (<CartItem
                            item={item}
                            key={i}
                        />)
                    })}
                </div>
                <div>Total : ${totalAmount}</div>
                <div className="cartModalButton-container">
                    <button className="cart-modal-button left" onClick={this.handleContinueShopping.bind(this)} type="button">Continue Shopping</button>
                    <button className="cart-modal-button right" type="button" onClick={() => { alert('not implemented') }} >Checkout (${totalAmount})</button>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart
    }
}
export default withRouter(connect(mapStateToProps, null)(Cart))
