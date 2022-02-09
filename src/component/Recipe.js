import React from 'react'
import RecipeCard from './RecipeCard'
import classes from './component.module.css'

const RecipeComponent = (props) => {
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