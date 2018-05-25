import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateQuantity } from './../../actions/cartActions';

class QuantityBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuantity: 1
        }
    }

    componentDidMount() {
        this.setState({
            currentQuantity: this.props.item.quantity
        })
    }

    handleQuantityChange = (change) => {
        let quantity = this.state.currentQuantity;
        switch (change) {
            case "increment": {
                quantity = quantity + 1;
                break;
            }
            case "decrement": {
                // TODO: allow setting quantity to 0 => delete item
                quantity = quantity > 1 ? quantity - 1 : 1;
                break;
            }
            default:
                break;
        }
        this.setState({
            currentQuantity: quantity
        });
        // update current item from shopping cart list
        const updatedItemDetails = Object.assign(this.props.item, { quantity: quantity });
        this.props.updateQuantity(updatedItemDetails);
    }

    render() {
        return (
            <div className="quantity-box">
                <div className="item-quantity left">
                    <input type="number" pattern="[0-9]*" min="1" value={this.state.currentQuantity} onChange={(event) => { this.setState({ currentQuantity: event.target.value }) }} />
                </div>
                <div className="adjust-quantity" onClick={() => { this.handleQuantityChange('increment') }}>
                    <span>+</span>
                </div>
                <div className="adjust-quantity" onClick={() => { this.handleQuantityChange('decrement') }} >
                    <span>-</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        cartItems: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuantity: (itemDetails) => dispatch(updateQuantity(itemDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityBox);