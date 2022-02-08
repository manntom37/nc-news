import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { BiCommentAdd } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";

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
            <Link to={`/articles/${article.article_id}`} className="BigLink">
              <li key={article.article_id} className="LinkNews">
                <h2 key={article.title} className="articleTitles">
                  {article.title}
                </h2>
                <p key={article.author} className="authorList">
                  {article.author}
                </p>
                <p key={article.key}>{article.body.substring(0, 200)}</p>
              </li>{" "}
              <div className="divider"></div>
            </Link>
            <div className="NewsDiv">
              <button className="Upvote">
                <BiUpArrowCircle className="UpVoteButton" />
              </button>
              <div className="CommentDiv">{article.votes}</div>
              <button className="Upvote">
                <BiCommentAdd className="UpVoteButton" />
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
