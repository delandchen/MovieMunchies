import React from 'react';
import classes from './component.module.css'

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.movie.title
        this.ID = props.movie.id
        this.imageURL = props.image
    };

    render() {
        return (
            <div className={classes.movieCard}>
                <img className={classes.movieImage} src={this.imageURL} />
            </div>
        );
    }
}

export default MovieCard;

// <h1 className={classes.movieTitle}> {this.title} </h1> 