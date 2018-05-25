import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartModalItem from "./CartModalItem";
import { withRouter } from "react-router-dom";
import './CartModal.css';

class CartModal extends Component {

    handleViewCart = () => {
        this.props.history.push('/cart')
    }

    render() {
        var totalAmount = 0;
        return (
            <div className="modal modal-content">
                Shopping Cart
                <ul className="Cart">
                    {this.props.cartItems.map((item, i) => {
                        totalAmount += (item.quantity * item.price);
                        return (<CartModalItem
                            item={item}
                            key={i}
                        />)
                    })}
                </ul>
                <div>Total : ${totalAmount}</div>
                <div className="cart-modal-button-container">
                    <button className="cart-modal-button left" onClick={this.handleViewCart.bind(this)} type="button">View Cart</button>
                    <button className="cart-modal-button right" type="button" onClick={() => { alert('not implemented') }} >Checkout</button>
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
export default withRouter(connect(mapStateToProps, null)(CartModal))
