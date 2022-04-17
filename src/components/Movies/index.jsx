import React from "react";
import "./movies.css";
import axios from "axios";
import { useEffect, useState } from "react";
import playIcon from "../../assets/image/playIcon.png";
import { useDispatch } from "react-redux";
import { getMovieId } from "../../redux/actions/movieAction";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [banner, setBanner] = useState([]);

  const dispatch = useDispatch();

  const getMovies = () => {
    axios
      .get(`https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies`)
      .then((res) => {
        setMovies(res.data.filter((item) => item.type !== "banner"));
        setBanner(res.data.filter((item) => item.type === "banner"));
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="all-movies">
      <div className="banner">
        <img src={banner[0]?.movieImageUrl} alt={banner[0]?.title} />
      </div>
      <h2 className="heading">Continue watching | {movies.length} movies</h2>
      <div className="movies-wrapper">
        {movies.map((movie) => {
          return (
            <div
              className="movie"
              key={movie?.id}
              onClick={() => {
                dispatch(getMovieId(+movie?.id));
              }}
            >
              <img
                key={movie?.id}
                src={movie?.movieImageUrl}
                alt={movie?.title}
              />
              <div className="movie-info">
                <div className="movie-info__play-icon">
                  <img src={playIcon} alt="" />
                </div>
                <div className="movie-info__title">
                  <p>{movie?.title}</p>
                  <span>{movie?.release_date}</span>
                </div>
                <div className="movie-info__duration">{movie?.duration}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
