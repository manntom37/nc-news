import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import { BiCommentAdd } from "react-icons/bi";
import { BiUpArrowCircle } from "react-icons/bi";
import moment from "moment";
import { getTopics } from "../utils/api";

const ArticleByTopic = () => {
  const { topic_id } = useParams();
  console.log(topic_id);
  const [topicParam, setTopicParam] = useState([]);

  useEffect(() => {
    getArticles(topic_id).then((res) => {
      setTopicParam(res);
    });
  }, [topic_id]);

  return (
    <ul className="NewsBody">
      <h2 className="TopicSlug">
        {topic_id.charAt(0).toUpperCase() + topic_id.slice(1)} Articles
      </h2>
      <br></br>
      {topicParam.map((topic) => {
        return (
          <>
            <Link to={`/articles/${topic.article_id}`} className="BigLink">
              <li className="LinkNews">
                {" "}
                <h2 className="articleTitles">{topic.title}</h2>
                <p className="authorList">{topic.author}</p>{" "}
                <p className="DatePosted">
                  {moment(topic.created_at).format("LL")}
                </p>
                <p>{topic.body.substring(0, 200)}</p>
              </li>
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
