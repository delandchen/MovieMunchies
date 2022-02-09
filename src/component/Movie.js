import React from 'react';
import MovieCard from './MovieCard';
import {MOVIE_IMAGE_BASE_URL, MOVIE_POSTER_SIZE} from '../config'
import NoImagePlaceholder from '../NoImagePlaceholder.svg'
import classes from './component.module.css'

const MovieComponent = (props) => {
    // Receives the list of Movie schema/objects
    const items = props.movie;
    const listItems = items.map((obj) => {
        return (
            <div key={obj.id} id={obj.id} onClick={props.openModal}>
                <MovieCard
                    movie={obj}
                    image={obj.poster_path ?
                        `${MOVIE_IMAGE_BASE_URL}${MOVIE_POSTER_SIZE}${obj.poster_path}`
                        : NoImagePlaceholder}
                />
            </div>
        )
    });

    return (
        <div className={classes.movieComponent}>
            {listItems}
        </div>
    );
}

export default MovieComponent;