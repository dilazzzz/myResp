import React, {useState} from "react";
import postsListStyles from './postList.module.css'
const PostList = ({posts, setPosts}) => {

    const deletePost = (id) => {
        setPosts(posts.filter(obj => obj.id !== id))
    }
    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={`post-${post.id}`} className={postsListStyles.wrapper}>
                        <div className={postsListStyles.content}>
                            <h2 className={postsListStyles.title}>{post.title}</h2>
                            <div className={postsListStyles.descr}>{post.descr}</div>
                        </div>
                        <button onClick={() => deletePost(post.id)} className={postsListStyles.btn}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
};

export default PostList;