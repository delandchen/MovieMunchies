import Axios from 'axios';
import { MOVIE_API_URL, MOVIE_ID_URL_PT1, MOVIE_ID_URL_PT2, MOVIE_POPULAR_URL } from '../config';

// Gets a list of 20 movies based on search term
const FetchMovies = async (searchTerms) => {
    return Axios.get(`${MOVIE_API_URL}${searchTerms}`).then((response) => {
        return response.data.results
    }).catch((err) => {
        console.log(err)
    });
}

// Gets a specific movie using ID
const FetchMovie = async (id) => {
    return Axios.get(`${MOVIE_ID_URL_PT1}${id}${MOVIE_ID_URL_PT2}`).then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err)
    });
}

// Gets the popular movies on themoviedb
const FetchPopular = async () => {
    return Axios.get(`${MOVIE_POPULAR_URL}`).then((response) => {
        return response.data.results
    }).catch((err) => {
        console.log(err)
    })
}

export{
    FetchMovies, 
    FetchMovie,
    FetchPopular,
};

