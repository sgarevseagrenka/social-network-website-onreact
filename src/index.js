import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './data/state';
export let rerender_tree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state}
                add_post={store.add_post.bind(store)}
                on_post_change={store.on_post_change.bind(store)}
                add_message={store.add_message.bind(store)}
                on_message_change={store.on_message_change.bind(store)} />
        </React.StrictMode>
    );
};
rerender_tree(store.get_state());
store.subscribe(rerender_tree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();