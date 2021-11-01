import React from "react";
import './Profile.module.css';
import s from "./Profile.module.css";

const Profile = () => {
    return  <div className={s.content}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cGUqGnCYT6DxUTYNd8hqbRLcDCZ9c6TsEw&usqp=CAU'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={s.posts}>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
            </div>
        </div>
    </div>
}

export default Profile;