import React from "react";
import App from './components/App'
import ReactDOM from "react-dom/client"
import  { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware, compose } from "redux";
import reducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware()));


const root = ReactDOM.createRoot(
    document.getElementById("root")
    );

    root.render(
        
            <Provider store={store} >
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Provider>
        
    );





