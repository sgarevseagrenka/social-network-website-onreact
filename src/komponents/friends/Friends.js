import React from "react";
import "./friends.css";
import Friend from "./Friend";
function Friends(props) {
    return (
        <div className="friends">
            <h3>My Friends</h3>
            <div className="friends_list">
                {props.friends_page.friends_list.map((e) => <Friend id={e.id} nickname={e.nickname} pic={e.pic} />)}
            </div>
        </div >
    );

}
export default Friends