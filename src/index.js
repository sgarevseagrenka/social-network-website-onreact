import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts__infor = [
  { id: 0, message: "sponsored by vaza s vadoy", likes: 9999 },
  { id: 1, message: "vaza s vadoy is a nice combination of vaza and vada for a cheap price of 9.999$ making it the best prouduct on the market you can prepurchase a vaza s vadoy today at https://vazasvadoystore.com/vazasvadoypurchase Note: vasa s vadoy website is currently being constructed you can buy a vaza s vadoy at the vaza s vadoy physical store in zimbabwe", likes: 9999 },
]

let messages_users = [
  { id: 2048, name: 'MrBubble' },
  { id: 0, name: "vaza bez wadi" }
]

let messages_texts = [
  { id: 1, message: "sponsored by vaza s vadoy. vaza s vadoy is a vaza containing vada witch hydrate.  you can buy it tuday for only 9.999$", nickname: "fireball" },
  { id: 2, nickname: "toasted grenka", message: "goes best with an vaza s vadoy" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messages_users={messages_users} messages_texts={messages_texts} posts__infor={posts__infor} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
