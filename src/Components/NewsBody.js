import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { BiCommentAdd, BiTime } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";
import moment from "moment";
import { patchArticleVotes } from "../utils/api";

const NewsBody = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getArticles().then((res) => {
      setIsLoading(false);
      return setArticles(res);
    });
  }, [setVotes]);

  if (isLoading) return <p className="Loading">Loading...</p>;

  const handleClick = (sort_by) => {
    getArticles(undefined, sort_by).then((res) => {
      return setArticles(res);
    });
  };

  const patchVotes = (article_id) => {
    patchArticleVotes(article_id).then((res) => {
      setVotes((currVote) => currVote + 1);
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
                key={article.article_id}
                to={`/articles/${article.article_id}`}
                className="BigLink"
              >
                <li className="LinkNews">
                  <h2 className="articleTitles" key={article.article_id}>
                    {article.title}
                  </h2>
                  <p className="authorList">{article.author}</p>{" "}
                  <p className="DatePosted">
                    {moment(article.created_at).format("LL")}
                  </p>
                  <p>{article.body.substring(0, 200)}</p>
                </li>{" "}
                <div className="dividerNewsBod"></div>
              </Link>
              <div className="NewsDiv">
                <button className="Upvote">
                  <BiUpArrowCircle
                    className="UpVoteButton"
                    onClick={() =>
                      patchVotes(article.article_id, article.votes)
                    }
                  />
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
