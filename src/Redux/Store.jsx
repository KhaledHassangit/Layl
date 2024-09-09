import { legacy_createStore ,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import RootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState= {}
const Middleware= [thunk]

const LaylStore = legacy_createStore
(RootReducer,initialState,composeWithDevTools(applyMiddleware(...Middleware)))

export default LaylStore 

// import { legacy_createStore, applyMiddleware } from 'redux';
// import {thunk} from 'redux-thunk';
// import RootReducer from './RootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {};
// const Middleware = [thunk];

// const composeEnhancers =
//   process.env.NODE_ENV === 'development'
//     ? composeWithDevTools
//     : (f) => f;  

// const LaylStore = legacy_createStore(
//   RootReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(...Middleware))
// );

// export default LaylStore;
