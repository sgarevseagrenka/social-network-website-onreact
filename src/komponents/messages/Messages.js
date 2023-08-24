import React from "react";
import Message from "../messages/Message";
import "./messages.css"
import { NavLink } from "react-router-dom";
import Messages_user from "./messages_users/Messages_user";
// import profilepicmini from "../../img/logo.png"

let messages_users = [{ id: 2048, name: 'MrBubble' }, { id: 0, name: "vaza bez wadi" }]
let messages_text = [{ id: 1, message: "sponsored by vaza s vadoy. vaza s vadoy is a vaza containing vada witch hydrate.  you can buy it tuday for only 9.999$", nickname: "fireball" },
{ id: 2, nickname: "toasted grenka", message: "goes best with an vaza s vadoy" }]

function Messages() {
    return (
        <div className="messages">
            <p className="messages__title">Messages</p>
            <div className="messages__content">
                <div className="messages__users">
                    {messages_users.map((e) => <Messages_user id={e.id} name={e.name} />)}
                </div>

                <div className="chat">
                    {messages_text.map((e) => <Message message={e.message} nickname={e.nickname} id={e.id} />)}
                </div>

                <div className="mesages__prep">
                    <input className="input" placeholder="write message here"></input>
                    <button>Add Message</button>
                </div>
            </div>
        </div>
    );

}
export default Messages