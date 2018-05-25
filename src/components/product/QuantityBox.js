import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart, updateQuantity } from './../../actions/cartActions';

class QuantityBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuantity: 1
        }
    }

    handleAddToCart = () => {
        // check if current item is already in the shopping cart
        const currentItem = this.props.cartItems.find(this.checkForCurrentItem);

        if (typeof currentItem !== 'undefined') {
            // update item in shopping cart
            const updatedItemDetails = Object.assign(currentItem, { quantity: currentItem.quantity + this.state.currentQuantity });
            this.props.updateQuantity(updatedItemDetails);
        } else {
            // create new in shopping cart
            const itemDetails = {
                title: this.props.item.title,
                image: this.props.item.image,
                quantity: this.state.currentQuantity,
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

    handleQuantityChange = (change) => {
        let quantity = this.state.currentQuantity;
        switch (change) {
            case "increment": {
                quantity = quantity + 1;
                break;
            }
            case "decrement": {
                quantity = quantity > 1 ? quantity - 1 : 1;
                break;
            }
            default:
                break;
        }
        this.setState({
            currentQuantity: quantity
        })
    }

    render() {
        return (
            <div className="quantity-box">
                <div className="item-quantity left">
                    <input type="number" pattern="[0-9]*" min="1" value={this.state.currentQuantity} onChange={(event) => { this.setState({ currentQuantity: event.target.value }) }} />
                </div>
                <div className="adjust-quantity" onClick={() => { this.handleQuantityChange('increment') }}>+</div>
                <div className="adjust-quantity" onClick={() => { this.handleQuantityChange('decrement') }}>-</div>
                <div><button className="add-to-cart-button" onClick={() => { this.handleAddToCart() }} type="button" >Add To Cart</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        item: state.products.selectedItem,
        cartItems: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (itemDetails) => dispatch(addToCart(itemDetails)),
        updateQuantity: (itemDetails) => dispatch(updateQuantity(itemDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityBox);