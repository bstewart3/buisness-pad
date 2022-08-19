import React from "react";
import App from './components/App'
import ReactDOM from "react-dom/client"
import  { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducers from './reducers/index'


const store = legacy_createStore(reducers);
const root = ReactDOM.createRoot(
    document.getElementById("root")
    );

    root.render(
        <React.StrictMode>
            <Provider store={store} >
                <App />
            </Provider>
        </React.StrictMode>
    );





