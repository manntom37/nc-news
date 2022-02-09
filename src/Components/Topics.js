import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const Topics = () => {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    getTopics().then((res) => {
      return setTopic(res);
    });
  }, []);
  return (
    <>
      <h1 className="CategoryH1">Looking for a certain topic?</h1>
      <div className="CategoryDivider"></div>
      <ul className="CategoryList">
        {topic.map((top) => {
          return (
            <li key={top.slug}>
              <h2>{top.slug.charAt(0).toUpperCase() + top.slug.slice(1)}</h2>
              <p className="CategorySlug">{top.description}</p>
              <div className="CategoryDivider"></div>
            </li>
          );
        })}
      </ul>{" "}
    </>
  );
};

export default Topics;
