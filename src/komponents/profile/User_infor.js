import React from "react";
import profilepic from "../../img/logo.png"
import "./profile.css"
import Posts from "./posts/Posts";

function User_infor() {
    return (
        <div className="user">
            <img className="profilepic" src={profilepic}></img>
            <p className="nickname">fireball</p>
        </div>
    );

}
export default User_infor