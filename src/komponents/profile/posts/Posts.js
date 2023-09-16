import React from "react";
import "./posts.css"
import Post from "./Post";
let post_text = React.createRef()

function Posts(props) {
    let add_post = () => {
        props.dispatch({ type: "ADD_POST" })
        post_text.current.value = ""
    };
    let on_post_change = () => {
        props.dispatch({
            type: "POST_CHANGE",
            text: post_text.current.value
        })
    }
    return (
        <div className="posts">
            <input autoFocus onChange={on_post_change} className="input" value={props.new_post_text} ref={post_text} placeholder="write message here"></input>
            <button onClick={add_post}>Add post</button>
            {props.posts__infor.map((e) => <Post id={e.id} message={e.message} likes={e.likes} />)}
        </div>


    );
}
export default Posts;