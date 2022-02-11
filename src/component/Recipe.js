import React from 'react'
import RecipeCard from './RecipeCard'
import classes from './component.module.css'

const RecipeComponent = (props) => {
    // Component that maps and displays all the recipe cards in grid format
    const items = props.recipe
    const listItem = items.map((obj, Index) => {
        return (
            <div key={Index}>
                <RecipeCard 
                    recipeObj={obj}
                />
            </div>
        )
    })

    return (
        <div className={classes.recipeComponent}>
            {listItem}
        </div>
    )
}

export default RecipeComponent;