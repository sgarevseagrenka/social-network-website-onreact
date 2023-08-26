import React from "react";
import "./profile.css"
import Posts from "./posts/Posts";
import User_infor from "./User_infor";



function Profile(props) {
    return (
        <div className="profile">
            <User_infor />
            <h3>My Posts</h3>
            <Posts posts__infor={props.profile_page.posts__infor} />


        </div>
    );

}
export default Profile