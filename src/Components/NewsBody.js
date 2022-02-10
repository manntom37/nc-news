import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { BiCommentAdd, BiTime } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";
import moment from "moment";
import { useParams } from "react-router-dom";

const NewsBody = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      return setArticles(res);
    });
  }, []);

  const handleClick = (sort_by) => {
    console.log(sort_by);
    getArticles(undefined, sort_by).then((res) => {
      return setArticles(res);
    });
  };

  return (
    <>
      <div className="SortBy">
        <p className="SortByText">Sort By:</p>
        <button
          className="NewButton"
          aria-label="Date Posted"
          onClick={() => handleClick("created_at")}
        >
          <BiTime />
        </button>
        <button
          className="NewButton"
          aria-label="Comment Count"
          onClick={() => handleClick("comment_count")}
        >
          <BiCommentAdd />
        </button>
        <button
          className="NewButton"
          aria-label="Votes Received"
          onClick={() => handleClick("votes")}
        >
          <BiUpArrowCircle />
        </button>
        <div className="divider"></div>
      </div>

      <ul className="NewsBody">
        {articles.map((article) => {
          return (
            <>
              <Link
                to={`/articles/${article.article_id}`}
                className="BigLink"
                key={article.article_id}
              >
                <li className="LinkNews" key={article.article_id}>
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
    </>
  );
};

export default NewsBody;
