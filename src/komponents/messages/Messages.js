import React from "react";
import Message from "../messages/Message";
import "./messages.css"
import { NavLink } from "react-router-dom";
import Messages_user from "./messages_users/Messages_user";
// import profilepicmini from "../../img/logo.png"

function Messages(props) {
    return (
        <div className="messages">
            <p className="messages__title">Messages</p>
            <div className="messages__content">
                <div className="messages__users">
                    {props.messages_page.messages_users.map((e) => <Messages_user id={e.id} name={e.name} />)}
                </div>

                <div className="chat">
                    {props.messages_page.messages_texts.map((e) => <Message message={e.message} nickname={e.nickname} id={e.id} />)}
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