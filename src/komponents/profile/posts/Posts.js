import React from "react";
import "./posts.css"
import Post from "./Post";


function Posts(props) {
    return (
        <div className="posts">
            <input className="input" placeholder="write message here"></input>
            <button>Add post</button>
            {props.posts__infor.map((e) => <Post id={e.id} message={e.message} likes={e.likes} />)}
        </div>


    );
}
export default Posts;