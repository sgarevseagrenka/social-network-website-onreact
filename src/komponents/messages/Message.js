import React from "react";
import "./messages.css"
import profilepicmini from "../../img/logo.png"

function Message(props) {

    return (
        <div className="message">
            {/* <img className="profilepicmini" src={`${props.profilepic}`} /> */}
            <p className="messageNickname">{props.nickname}</p>
            <p className="messageTxt">{props.message}</p>
        </div>




    );
}
export default Message