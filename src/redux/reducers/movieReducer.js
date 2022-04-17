const initialState = {
  movieId: "1",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVIE_ID":
      return {
        movieId: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
