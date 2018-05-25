import { combineReducers } from "redux";
import CartReducer from "./cart";
import CartModalReducer from "./cartModal";
import ProdutcsReducer from "./products";

const rootReducer = combineReducers({
    cart: CartReducer,
    cartModal: CartModalReducer,
    products: ProdutcsReducer
});

export default rootReducer;