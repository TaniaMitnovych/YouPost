import React from "react";
import { IComment } from "../../types/Comment";
import { Comment } from "../Comment/Comment";
import "./CommentList.scss";

export const CommentList: React.FC<{ comments: Array<IComment> }> = ({ comments }) => {
  return (
    <div className="comment-list">
      {
        comments.map((comment) => {
          return (
            <Comment key={comment.id} comment={comment}/>
          )
        })
      }
    </div>
  )
}

export default CommentList;