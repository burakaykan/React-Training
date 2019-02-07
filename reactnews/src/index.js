import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let selector = <App />;
// let count = 0;
// function setSelector() {
//     if (count%2===0) {
//         setTimeout(function(){ <h1>It can be a variable too...</h1> }, 3000);
//         count === count+1;
//         } else {setTimeout(function(){ <App /> }, 3000)}
// };

// let showPage = setSelector();

ReactDOM.render(selector, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
