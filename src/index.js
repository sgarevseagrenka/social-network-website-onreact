import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { add_post, on_post_change, add_message, on_message_change } from './data/state';
import { subscribe } from './data/state';
export let rerender_tree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} add_post={add_post} on_post_change={on_post_change} add_message={add_message} on_message_change={on_message_change} />
        </React.StrictMode>
    );
};
rerender_tree(state);
subscribe(rerender_tree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();