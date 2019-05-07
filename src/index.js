import React from 'react'
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createStore,applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import Routes from "./Routes";
import history from "./history";
import RootReducer from "./component/reducers/RootReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const App=(props)=>{
    return (
    <Router history={history} >
       <Routes {...props}/>
    </Router>
    )
}

ReactDOM.render(
  <Provider store={createStore(RootReducer, composeEnhancer(applyMiddleware(reduxThunk)))} >
    <App/>
  </Provider>
,document.querySelector('#root'));

