import React, { useEffect, useState } from "react";
import "./comments.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Comments = () => {
  const movieId = useSelector((state) => state.movie.movieId);
  const [comments, setComments] = useState([]);

  const inputsValues = {
    username: "",
    comment_msg: "",
  };

  const [values, setValues] = useState(inputsValues);

  const getComments = () => {
    axios
      .get(
        `https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies/${movieId}/comments`
      )
      .then((res) => setComments(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies/${movieId}/comments`,
        values
      )
      .finally(() => {
        setValues(inputsValues);
        getComments();
      });
  };

  useEffect(() => {
    getComments();
  }, [movieId]);

  return (
    <div className="comments">
      <div className="comments-heading">
        <h2>Comments</h2>
      </div>
      <div className="comments-main">
        {comments.map((comment) => (
          <p key={comment?.id}>
            <span>{comment?.username}</span> <br />
            {comment?.comment_msg}
          </p>
        ))}
      </div>
      <div className="comments-form-wrapper">
        <form className="comments-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={values.username}
            required
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
          <textarea
            name=""
            placeholder="Comment..."
            value={values.comment_msg}
            required
            onChange={(e) =>
              setValues({ ...values, comment_msg: e.target.value })
            }
          ></textarea>
          <button type="submit" className="form-btn">
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
