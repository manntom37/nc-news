import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { BiCommentAdd } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";
import moment from "moment";

const NewsBody = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((res) => {
      return setArticles(res);
    });
  }, []);
  return (
    <ul className="NewsBody">
      {articles.map((article) => {
        return (
          <>
            <Link
              to={`/articles/${article.article_id}`}
              className="BigLink"
              key={article.article_id}
            >
              <li className="LinkNews">
                <h2 className="articleTitles">{article.title}</h2>
                <p className="authorList">{article.author}</p>{" "}
                <p className="DatePosted">
                  {moment(article.created_at).format("LL")}
                </p>
                <p>{article.body.substring(0, 200)}</p>
              </li>{" "}
              <div className="divider"></div>
            </Link>
            <div className="NewsDiv">
              <button className="Upvote">
                <BiUpArrowCircle className="UpVoteButton" />
              </button>

              <div className="CommentDiv">{article.votes}</div>
              <button className="Upvote">
                <Link to={`/articles/${article.article_id}`}>
                  {" "}
                  <BiCommentAdd className="UpVoteButton" />
                </Link>
              </button>

              <div className="CommentDiv">{article.comment_count}</div>
            </div>
          </>
        );
      })}
    </ul>
  );
};

export default NewsBody;
