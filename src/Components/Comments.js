import React from "react";
import { getArticleComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(article_id).then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <>
      <h2 className="Comments">Comments</h2>
      <ul className="CommentsUL">
        {comments.map((comment) => {
          return (
            <li className="CommentLI">
              <p className="authorOfComment">{comment.author}</p>
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
