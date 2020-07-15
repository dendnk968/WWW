import React from "react";
import App from './App';
import './index.css';
import ReactDOM from "react-dom";
import store from "./redux/Store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

let render = () => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
        ,
        document.getElementById('root')
    )
};
render()

store.subscribe(() => {
    render();
})
