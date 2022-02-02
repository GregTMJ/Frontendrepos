import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";


import AppRedux from "../src/App-Redux";
import reducer from "../src/enhancers/reducers"


import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(reducer);


// const testButton = document.querySelector(".testButton");
// const items = document.querySelector(".testUl");
// const inputValue = document.querySelector(".testInput");
//
// console.log('store', store)
//
//
// store.subscribe(() => {
//     console.log("subscribe", store.getState());
//
//     items.innerHTML = '';
//     inputValue.value = ''
//
//     store.getState().map(element => {
//         const li = document.createElement('li');
//         li.textContent = element;
//         items.appendChild(li);
//     })
// })
//
//
// testButton.addEventListener('click', () => {
//
//     store.dispatch({type:"WRITE", payload: inputValue.value})
//
// })


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                    <AppRedux />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById("root"))