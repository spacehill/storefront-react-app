import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk"
import reducers from './reducers';

//ready for further middlewares like redux-persist

let store = createStore(reducers, applyMiddleware(thunk));

export default store;