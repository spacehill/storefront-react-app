import React, { Component } from 'react';
import { Switch, Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/productsActions'
import { showCartModal, hideCartModal } from './actions/cartModalActions'

import Cart from "./components/cart/Cart";
import CartModal from "./components/cartModal/CartModal";
import Category from "./components/category/Category";
import Product from "./components/product/Product";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData('/products.json');
  }


  render() {
    console.log(this.props);
    return (
      <div className="App" onClick={(event) => !event.target.classList.contains('modal') && this.props.isCartModalVisible ? this.props.hideCartModal() : null}>
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">Storefront Assignment</h1>
        </header>
        <header>
          <div className="modal my-cart-button" onClick={this.props.showCartModal}>My Cart ({this.props.cartItems.length})</div>
        </header>
        {this.props.isCartModalVisible && <CartModal />}
        <Switch>
          <Route exact path="/" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isCartModalVisible: state.cartModal.isVisible,
    cartItems: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    showCartModal: () => dispatch(showCartModal()),
    hideCartModal: () => dispatch(hideCartModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));