import React from "react";
import { getArticleComments, postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import { FaUserCircle } from "react-icons/fa";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(article_id).then((res) => {
      setComments(res);
    });
  }, [comments, article_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, event.target[0].value);
  };

  return (
    <>
      <h2 className="Comments">Comments</h2>
      <div className="AddCommentDiv">
        <p className="AddCommentP">Something to say?</p>
        <form onSubmit={handleSubmit}>
          <input
            className="InputComment"
            // className="AddComment"
            // className="SubmitComment"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul className="CommentsUL">
        {comments.map((comment) => {
          return (
            <li className="CommentLI" key={comment.comment_id}>
              <p className="authorOfComment">
                {" "}
                <FaUserCircle className="UserIconComments" />
                {comment.author}
              </p>
              <p className="DatePostedComment">
                {moment(comment.created_at).format("LL")}
              </p>
              <p className="CommentBody">{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Comments;
