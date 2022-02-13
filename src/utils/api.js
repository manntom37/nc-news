import axios from "axios";

const NewsAPI = axios.create({
  baseURL: "https://b-end-nc-news-tom-mann.herokuapp.com/api/",
});

export const getArticles = (topic_id, sort_by) => {
  return NewsAPI.get("/articles", {
    params: { topic: topic_id, sort_by },
  }).then((res) => {
    return res.data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return NewsAPI.get(`articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return NewsAPI.get(`articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getTopics = () => {
  return NewsAPI.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticleComments = (article_id) => {
  return NewsAPI.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticleVotes = (article_id) => {
  return NewsAPI.patch(`/articles/${article_id}`, {
    inc_votes: 1,
  }).then((res) => {
    return res.data.article.votes;
  });
};
