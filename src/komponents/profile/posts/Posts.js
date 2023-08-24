import React from "react";
import "./posts.css"
import Post from "./Post";

function Posts() {
    return (
        <div className="posts">
            <input className="input" placeholder="write message here"></input>
            <button>Add post</button>
            <Post message="postTxt" />
            <Post message="sponsored by vaza s vadoy" />
            <Post message="d" />
        </div>


    );
}
export default Posts;