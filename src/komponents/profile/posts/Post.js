import React from "react";
import "./posts.css"
import profilepicmini from "../../../img/logo.png"

function Post(props) {
    return (
        <div className="post">
            <img className="profilepicmini" src={profilepicmini} />
            <p className="postNickname">fireball</p>
            <p className="postTxt">{props.message}</p>
            <p>{props.likes} likes</p>
        </div>




    );
}
export default Post