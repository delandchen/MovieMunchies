import React from 'react';
import classes from './component.module.css'

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.recipeObj.recipe.label
        this.imageURL = props.recipeObj.recipe.image
        this.recipeURL = props.recipeObj.recipe.url
    };

    render() {
        return (
            <div className={classes.recipeCard} onClick={() => {window.open(this.recipeURL)}}>
                <img className={classes.recipeImage} src={this.imageURL} />
            </div>
        );
    }
}

export default RecipeCard;