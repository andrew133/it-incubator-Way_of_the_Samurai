import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../Redax/state";


type MyPosts = {
    posts: PostsType[]

}


const MyPosts = (props: MyPosts) => {
    let postElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = ()=>{
        debugger;
        let tex = newPostElement.current?.value
        alert(tex);
    }
    return (
        <div className={s.postBlog}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;