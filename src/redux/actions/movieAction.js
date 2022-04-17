export const getMovieId = (value) => {
    return {
        type: 'MOVIE_ID',
        payload: value
    }
}

export const getAllMovies = (value) => {
    return {
        type: 'MOVIE_DATA',
        payload: value
    }
}

export const getAllComments = (value) => {
    return {
        type: 'COMMENTS_DATA',
        payload: value
    }
}

