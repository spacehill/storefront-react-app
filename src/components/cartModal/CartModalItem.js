import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { removeFromCart } from './../../actions/cartActions';

class CartItem extends Component {
    handleRemoveFromCart = () => {
        this.props.removeFromCart(this.props.item);
    };

    handleViewDetail = () => {
        this.props.setSelectedProduct(this.props.item);
        this.props.history.push('/product/' + this.props.title)
    }
    render() {
        const imageUrl = "/media/" + this.props.item.image;
        return (
            <li className="card">
                <div className="cart-modal-item-image">
                    <img src={imageUrl} alt={this.props.item.title} />
                </div>
                <div className="cart-modal-item-body">
                    <button className=" modal removeFromCart" onClick={() => { this.handleRemoveFromCart() }} type="button" >x</button>
                    <div className="cart-modal-item-title">{this.props.item.title} x {this.props.item.quantity}</div>
                    <div className="cart-modal-item-brand">{this.props.item.brand}</div>
                    <div className="cart-modal-item-price">${this.props.item.price}</div>
                </div>
            </li >
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (itemDetails) => dispatch(removeFromCart(itemDetails))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CartItem));
