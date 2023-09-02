import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { add_post } from './data/state';
import { add_message } from './data/state';

export let rerender_tree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} add_post={add_post} add_message={add_message} />
        </React.StrictMode>
    );
};



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();