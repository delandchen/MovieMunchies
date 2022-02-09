import Axios from 'axios';
import { RECIPE_API_ID, RECIPE_API_URL, RECIPE_API_KEY } from '../config';

const RecipeApi = async (searchTerms) => {
    return Axios.get(`${RECIPE_API_URL}${searchTerms}&app_id=${RECIPE_API_ID}&app_key=${RECIPE_API_KEY}`)
    .then((response) => {
        return response.data.hits
    }).catch((err) => {
        console.log(err)
    });

    
}

export default RecipeApi;