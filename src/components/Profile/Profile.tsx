import React from "react";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType, StateType} from "../../Rudax/state";


type ProfileType = {
    profilePage: ProfilePageType
}
const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;