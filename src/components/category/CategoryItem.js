import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addToCart, updateQuantity } from './../../actions/cartActions';
import { setSelectedProduct } from './../../actions/productsActions';

class CategoryItem extends Component {
    handleAddToCart = () => {
        // check if current item is already in the shopping cart
        const currentItem = this.props.cartItems.find(this.checkForCurrentItem);

        if (typeof currentItem !== 'undefined') {
            // update item in shopping cart
            const updatedItemDetails = Object.assign(currentItem, { quantity: currentItem.quantity + 1 });
            this.props.updateQuantity(updatedItemDetails);
        } else {
            // create new in shopping cart
            const itemDetails = {
                title: this.props.item.title,
                image: this.props.item.image,
                quantity: 1,
                price: this.props.item.price,
                brand: this.props.item.brand
            }
            this.props.addToCart(itemDetails);
        }
    };

    checkForCurrentItem = (cartItem) => {
        const { item } = this.props;
        return cartItem.title === item.title;
    }

    handleViewDetail = () => {
        this.props.setSelectedProduct(this.props.item);
        this.props.history.push('/product/' + this.props.title)
    }
    render() {
        const imageUrl = "/media/" + this.props.item.image;
        return (
            <li className="card">
                <div className="item-image">
                    <img src={imageUrl} alt={this.props.item.title} />
                    <button className="detailsButton" onClick={this.handleViewDetail.bind(this)} type="button">View Details</button>
                    <button className="addToCartButton" onClick={this.handleAddToCart.bind(this)} type="button" >Add To Cart</button>
                </div>
                <div className="item-body">
                    <div className="item-brand">{this.props.item.brand}</div>
                    <div className="item-title">{this.props.item.title}</div>
                    <div className="item-price">${this.props.item.price}</div>
                </div>
            </li >
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (itemDetails) => dispatch(addToCart(itemDetails)),
        updateQuantity: (itemDetails) => dispatch(updateQuantity(itemDetails)),
        setSelectedProduct: (products) => dispatch(setSelectedProduct(products))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryItem));
