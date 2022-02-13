import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import { BiCommentAdd } from "react-icons/bi";
import { BiUpArrowCircle, BiTime } from "react-icons/bi";
import moment from "moment";
import { AiFillTag } from "react-icons/ai";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const ArticleByTopic = () => {
  const { topic_id } = useParams();
  const [topicParam, setTopicParam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let topicsAvailable = ["football", "coding", "cooking"];

  useEffect(() => {
    getArticles(topic_id).then((res) => {
      setTopicParam(res);
      setIsLoading(false);
    });
  }, [topic_id]);

  if (isLoading) return <p className="Loading">Loading...</p>;

  const handleClick = (sort_by) => {
    getArticles(topic_id, sort_by).then((res) => {
      return setTopicParam(res);
    });
  };

  return (
    <ul className="NewsBody">
      <h2 className="TopicSlug">
        <div className="backArrowCat">
          <Link to={`/topics/`} key={topic_id}>
            <BsArrowLeftSquareFill className="backArrowIconCat" />
          </Link>

          <p className="BackArrowCategories">
            {topic_id.charAt(0).toUpperCase() + topic_id.slice(1)} Articles
          </p>
        </div>{" "}
      </h2>{" "}
      <br></br>
      <div className="SortByOnTopics">
        <p className="SortByTextOnTopics">Sort By:</p>
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
      </div>
      <br></br>
      {topicParam.map((topic) => {
        return (
          <>
            <Link
              to={`/articles/${topic.article_id}`}
              className="BigLink"
              key={topic.article_id}
            >
              <li className="LinkNews" key={topic.article_id}>
                {" "}
                <h2 className="articleTitles">{topic.title}</h2>
                <p className="authorList">{topic.author}</p>{" "}
                <p className="DatePosted">
                  {moment(topic.created_at).format("LL")}
                </p>
                <p>{topic.body.substring(0, 200)}</p>{" "}
                <p className="DatePosted">
                  <AiFillTag />{" "}
                  {topic_id.charAt(0).toUpperCase() + topic_id.slice(1)}
                </p>
              </li>{" "}
              <div className="CategoryDivider"></div>
            </Link>
            <div className="NewsDiv">
              <button className="Upvote">
                <BiUpArrowCircle className="UpVoteButton" />
              </button>

              <div className="CommentDiv">{topic.votes}</div>
              <button className="Upvote">
                <Link to={`/articles/${topic.article_id}`}>
                  {" "}
                  <BiCommentAdd className="UpVoteButton" />
                </Link>
              </button>

              <div className="CommentDiv">{topic.comment_count}</div>
            </div>
          </>
        );
      })}
    </ul>
  );
};

export default ArticleByTopic;
