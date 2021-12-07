import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Profile from "../Profile";

export type MyPostType = {
posts: Array<{
    id: number
    message: string
    likesCount: number
}>
}
debugger
const MyPosts = (props: MyPostType) => {
    let postElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
debugger
    return (
        <div className={s.postBlog}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
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