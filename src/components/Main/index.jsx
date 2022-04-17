import React from "react";
import "./main.css";
import Movies from "../Movies";
import Comments from "../Comments";

const Main = () => {
  return (
    <main>
      <div className="container section-grid">
        <Movies />
        <Comments />
      </div>
    </main>
  );
};

export default Main;
