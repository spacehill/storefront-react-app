import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { removeFromCart } from './../../actions/cartActions';

import QuantityBox from './QuantityBox'
class CartItem extends Component {
    handleRemoveFromCart = () => {
        this.props.removeFromCart(this.props.item);
    };
    render() {
        const imageUrl = "/media/" + this.props.item.image;
        return (
            <article className="cart-item-row">
                <div className="cart-item-cell cart-item-product">
                    <div className="cartItem-image">
                        <img src={imageUrl} alt={this.props.item.title} />
                    </div>
                    <div className="cartItem-body">
                        <div className="cartItem-title">{this.props.item.title}</div>
                        <div className="cartItem-brand">{this.props.item.brand}</div>
                        <div className="cartItem-price">${this.props.item.price}</div>
                    </div>
                </div>
                <div className="cart-item-cell cart-item-quantity"><QuantityBox item={this.props.item} /></div>
                <div className="cart-item-cell cart-item-total">{this.props.item.quantity * this.props.item.price}</div>
                <div className="cart-item-cell cart-item-action"><button className=" modal removeFromCart" onClick={() => { this.handleRemoveFromCart() }} type="button" >x</button></div>
            </article>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (itemDetails) => dispatch(removeFromCart(itemDetails))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CartItem));
