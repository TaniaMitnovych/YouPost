import React from "react";
import { IPost } from "../../types/Post";
import { Post } from "../Post/Post";
import './PostList.scss';

export const PostList: React.FC<{ posts: Array<IPost> }> = ({ posts }) => {
  return (
    <div className="post-list">
      {
        posts.map((post) => {
          return (
            <Post key={post.id} post={post} />
          )
        })
      }
    </div>
  )
}

export default PostList;