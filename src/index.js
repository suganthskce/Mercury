import FormContainer from "./js/components/container/FormContainer.jsx";
import SecondContainer from "./js/components/container/secondContainer.jsx";
import { Provider } from "react-redux";
import Cookie from "react-cookies";
import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from "./js/reducer/index";
import { createStore, applyMiddleware } from "redux";
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
/* Middleware */
import thunk from "redux-thunk";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Home from './js/pages/home'
import Login from './js/pages/login'
import Register from './js/pages/Register'


let order = [thunk];
const middleware = applyMiddleware(...order);
let store = createStore(allReducers, composeWithDevTools(middleware));
let persistor = persistStore(store);
const LoadingStoreFromLocalStorage = () => {
    return <div>Please wait...</div>;
}
const onBeforeLift = () => {
    // take some action before the gate lifts
}

const isAuthenticatedArr = {
    LoginPage: <Login />,
    Home: <Home />,
    Register: <Register />,
};
const isAuthenticated = props => {
    if (Cookie.load("uuid") == undefined) {
        //Cookie.save('referrer', window.location.pathname);
        window.location.href = '/remainder/login/';
    }
    return isAuthenticatedArr[props.componentName];
};

const nnnav = (show) => {
    return show ? <ul>
        <li>
            <Link to="/remainder">Home</Link>
        </li>
        <li>
            <Link to="/remainder/login">Login</Link>
        </li>
        <li>
            <Link to="/remainder/register">Register</Link>
        </li>
    </ul> : ''
}

const routing = (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LoadingStoreFromLocalStorage />} onBeforeLift={onBeforeLift}>
            <Router >
                <div>
                    {nnnav(false)}
                    <Route exact path="/remainder/login" component={Login} />
                    <Route exact path="/remainder/register" component={Register} />
                    <Route
                        exact
                        path="/remainder"
                        component={props =>
                            isAuthenticated({ componentName: "Home" })}
                    />
                </div>
            </Router>
        </PersistGate>
    </Provider>
);

const wrapper = document.getElementById("app");
wrapper ?
    ReactDOM.render(routing, wrapper) : false;

// const wrapper = document.getElementById("app");
// wrapper ?
//     ReactDOM.render(<Router >
//         <Route exact path="/" component={FormContainer} />
//         <Route exact path="/second" component={SecondContainer} />
//     </Router >, wrapper) : false;