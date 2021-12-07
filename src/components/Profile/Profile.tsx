import React from "react";
// import './Profile.module.css';
import s from "./Profile.module.css";
import MyPosts, {MyPostType} from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {state} from "../../index";

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts}/>
        </div>
    )
}

export default Profile;