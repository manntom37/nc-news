import React, { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import moment from "moment";
import { AiFillTag } from "react-icons/ai";
import ErrorPage from "./ErrorPage";
import { createBrowserHistory } from "history";
import Comments from "./Comments";
let history = createBrowserHistory();

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((res) => {
        setArticle(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [article_id]);
  if (error) {
    return <ErrorPage></ErrorPage>;
  }
  if (isLoading) return <p className="Loading">Loading...</p>;

  return (
    <>
      <div className="backArrow">
        <BsArrowLeftSquareFill
          className="backArrowIcon"
          onClick={() => history.go(-1)}
        />
      </div>

      <div>
        <li key={article.article_id} className="LinkNewsSingle">
          <h1 className="SingleArticleHeader">{article.title}</h1>
          <p className="DatePostedSingleArticle">
            {moment(article.created_at).format("LL")}
          </p>

          <p className="author">{article.author}</p>
          <p>{article.body}</p>
          <p className="SingleArticleTag">
            <AiFillTag />
            {article.topic}
          </p>
        </li>
        <div className="CategoryDividerComments"></div>
      </div>
      <Comments></Comments>
    </>
  );
};
export default SingleArticle;
