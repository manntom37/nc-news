import React, { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";

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
      <Link to={"/"}>
        <div className="backArrow">
          <BsArrowLeftSquareFill className="backArrowIcon" />
        </div>
      </Link>
      <div>
        <li key={article.article_id} className="LinkNewsSingle">
          <h1 className="SingleArticleHeader">{article.title}</h1>
          <p className="DatePostedSingleArticle">
            {moment(article.created_at).format("LL")}
          </p>

          <p className="author">{article.author}</p>
          <p>{article.body}</p>
        </li>
      </div>
    </>
  );
};
export default SingleArticle;
