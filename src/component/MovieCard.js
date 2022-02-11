import React from 'react';
import classes from './component.module.css'

class MovieCard extends React.Component {
    // Renders the properties of the movie object passed in
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
