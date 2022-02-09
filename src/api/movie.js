import Axios from 'axios';
import { MOVIE_API_URL, MOVIE_ID_URL_PT1, MOVIE_ID_URL_PT2, MOVIE_POPULAR_URL } from '../config';

const FetchMovies = async (searchTerms) => {
    return Axios.get(`${MOVIE_API_URL}${searchTerms}`).then((response) => {
        return response.data.results
    }).catch((err) => {
        console.log(err)
    });
}

const FetchMovie = async (id) => {
    return Axios.get(`${MOVIE_ID_URL_PT1}${id}${MOVIE_ID_URL_PT2}`).then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err)
    });
}

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

