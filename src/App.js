import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/NewsBody";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/Topics";
import ArticleByTopic from "./Components/ArticleByTopic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Home />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic_id" element={<ArticleByTopic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
