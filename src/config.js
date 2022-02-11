// API KEYS/URL for MOVIE API
const MOVIE_API_KEY = "PUT YOUR API KEY HERE";
const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=`
const MOVIE_ID_URL_PT1 = `https://api.themoviedb.org/3/movie/`
const MOVIE_ID_URL_PT2 = `?api_key=${MOVIE_API_KEY}&language=en-US`
const MOVIE_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US&page=1`

const MOVIE_IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const MOVIE_POSTER_SIZE = 'w780';


// API KEYS/URL for RECIPE API
const RECIPE_API_KEY = "YOUR API KEY HERE";
const RECIPE_API_ID = "YOUR EDAMAM API ID";
const RECIPE_API_URL = "https://api.edamam.com/api/recipes/v2?type=public&q="


export {
    MOVIE_API_KEY,
    MOVIE_API_URL,
    MOVIE_IMAGE_BASE_URL,
    MOVIE_POSTER_SIZE,
    RECIPE_API_ID,
    RECIPE_API_KEY,
    RECIPE_API_URL,
    MOVIE_ID_URL_PT2,
    MOVIE_ID_URL_PT1,
    MOVIE_POPULAR_URL,
};

