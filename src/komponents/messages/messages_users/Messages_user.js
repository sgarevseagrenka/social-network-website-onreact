import React from "react";
import { NavLink } from "react-router-dom";

function Messages_user(props) {
    return (
        <div className="messages__user">
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
export default Messages_user