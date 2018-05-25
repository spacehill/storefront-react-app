import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import QuantityBox from './QuantityBox'
import './Product.css';

class Product extends Component {

    render() {
        const imageUrl = "/media/" + this.props.item.image;
        return (
            <div className="Product">
                <div className="detail-image">
                    <img src={imageUrl} alt={this.props.item.title} />
                </div>
                <div className="detail-body">
                    <div className="detail-brand">{this.props.item.brand}</div>
                    <div className="detail-title">{this.props.item.title}</div>
                    <div className="detail-price">${this.props.item.price}</div>
                    <div className="detail-desc">{this.props.item.description}</div>
                    <hr />
                    <QuantityBox />
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        item: state.products.selectedItem
    }
}
export default withRouter(connect(mapStateToProps, null)(Product))
