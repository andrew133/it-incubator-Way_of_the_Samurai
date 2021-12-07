import React from "react";
// import './Profile.module.css';
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props:any) => {
    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 5},
        {id: 2, message: "It's my first post.", likesCount: 11},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;