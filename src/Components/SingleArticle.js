import React, { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";
import { AiFillTag } from "react-icons/ai";
import { createBrowserHistory } from "history";
let history = createBrowserHistory();

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getSingleArticle(article_id).then((res) => {
      setArticle(res);
    });
  }, []);

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
    </>
  );
};
export default SingleArticle;
