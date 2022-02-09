// API KEYS/URL for MOVIE API
const MOVIE_API_KEY = "d498a38ba2917a38b298752c083858d6";
const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=`
const MOVIE_ID_URL_PT1 = `https://api.themoviedb.org/3/movie/`
const MOVIE_ID_URL_PT2 = `?api_key=${MOVIE_API_KEY}&language=en-US`
const MOVIE_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US&page=1`

const MOVIE_IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const MOVIE_POSTER_SIZE = 'w500';


// API KEYS/URL for RECIPE API
const RECIPE_API_KEY = "b40ed0c90d4bae1dc968f78221d2eb85";
const RECIPE_API_ID = "c697216a";
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

