import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cookie from "react-cookies";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import allReducers from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
/* Middleware */
import thunk from "redux-thunk";


//import * as serviceWorker from './serviceWorker';
import Home from './pages/home'
import Login from './pages/login'
import Default from './pages/default'



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


/**
 * Registering Our Service Worker
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./serviceWorker')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

const isAuthenticatedArr = {
    LoginPage: <Login />,
    Home: <Home />,
    Default: <Default />,
};
const isAuthenticated = props => {
    if (Cookie.load("uuid") == undefined) {
        Cookie.save('referrer', window.location.pathname);
        window.location.href = '/remainder/login/';
    }
    return isAuthenticatedArr[props.componentName];
};

const nnnav = (show) => {
    return show ? <ul>
        <li>
            <Link to="/remainder">Default</Link>
        </li>
        <li>
            <Link to="/remainder/home">Home</Link>
        </li>
        <li>
            <Link to="/remainder/login">Login</Link>
        </li>
    </ul> : ''
}

const routing = (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LoadingStoreFromLocalStorage />} onBeforeLift={onBeforeLift}>
            <Router >
                <div>
                    {nnnav(true)}
                    <Route path="/remainder/login" component={Login} />
                    <Route
                        exact
                        path="/remainder/"
                        component={props =>
                            isAuthenticated({ componentName: "Default" })}
                    />
                    <Route
                        exact
                        path="/remainder/home/"
                        component={props =>
                            isAuthenticated({ componentName: "Home" })}
                    />
                </div>
            </Router>
        </PersistGate>
    </Provider>
);



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
