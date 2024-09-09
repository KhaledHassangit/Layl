// import { legacy_createStore ,applyMiddleware} from 'redux'
// import {thunk} from 'redux-thunk';
// import RootReducer from './RootReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState= {}
// const Middleware= [thunk]

// const LaylStore = legacy_createStore
// (RootReducer,initialState,composeWithDevTools(applyMiddleware(...Middleware)))

// export default LaylStore 

import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

const initialState = {};
const Middleware = [thunk];

const LaylStore = legacy_createStore(
    RootReducer,
    initialState,
    applyMiddleware(...Middleware) 
    );

    export default LaylStore;
