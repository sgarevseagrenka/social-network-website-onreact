import React from "react";
import "./friends.css"

function Friend(props) {
    return (
        <div className="message">
            <img className="profilepicmini" src={require(`../../img/${props.pic}`).default} />
            <p className="friendNickname">{props.nickname}</p>
        </div>




    );
}
export default Friend