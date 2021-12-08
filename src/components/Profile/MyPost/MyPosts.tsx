import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../index";

type MyPosts = {
    posts: PostsType[]
}

const MyPosts = (props: MyPosts) => {
    let postElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postBlog}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>  </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;