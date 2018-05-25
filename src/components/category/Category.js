import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import './Category.css';

class Category extends Component {

    render() {
        var { products } = this.props;
        return (
            <ul className="Category">
                {products.map((product, i) => (
                    <CategoryItem
                        item={product}
                        key={i}
                    />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.items
    }
}
export default withRouter(connect(mapStateToProps, null)(Category))

