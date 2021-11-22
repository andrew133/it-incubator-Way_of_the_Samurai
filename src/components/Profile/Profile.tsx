import React from "react";
// import './Profile.module.css';
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
    <div>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cGUqGnCYT6DxUTYNd8hqbRLcDCZ9c6TsEw&usqp=CAU'/>
        </div>
        <div>
            ava + description
        </div>
       <MyPosts />
    </div>
    )
}

export default Profile;