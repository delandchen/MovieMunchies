import React from 'react';
import classes from './component.module.css';
import { Link } from 'react-router-dom'


class Navigation extends React.Component {

    render() {
        return (
            <div className={classes.navigation}>
                        <Link className={classes.navItem} to='/' onClick={this.props.movieState}> Pick a Movie </Link>
                    
                        <Link className={classes.navItem} to='/recipe' onClick={this.props.recipeState}> Pick a Snack </Link>
            </div>

        )
    }
}

export default Navigation;