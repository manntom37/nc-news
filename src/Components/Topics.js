import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const Topics = () => {
  const [topic, setTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTopics().then((res) => {
      setIsLoading(false);
      return setTopic(res);
    });
  }, []);

  if (isLoading) return <p className="Loading">Loading...</p>;
  return (
    <>
      <h1 className="CategoryH1">Looking for a certain topic?</h1>
      <div className="CategoryDivider"></div>
      <ul className="CategoryList">
        {topic.map((top) => {
          return (
            <li key={top.slug}>
              <Link to={`/topics/${top.slug}`}>
                <h2>{top.slug.charAt(0).toUpperCase() + top.slug.slice(1)}</h2>
              </Link>
              <p className="CategorySlug">{top.description}</p>
              <div className="CategoryDivider"></div>
            </li>
          );
        })}{" "}
      </ul>{" "}
    </>
  );
};

export default Topics;
