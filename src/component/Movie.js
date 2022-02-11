import React from 'react';
import MovieCard from './MovieCard';
import {MOVIE_IMAGE_BASE_URL, MOVIE_POSTER_SIZE} from '../config'
import no_image from '../no_image.jpg'
import classes from './component.module.css'

const MovieComponent = (props) => {
    // Maps and displays the movie cards
    const items = props.movie;
    const listItems = items.map((obj) => {
        return (
            <div key={obj.id} id={obj.id} onClick={props.openModal}>
                <MovieCard
                    movie={obj}
                    image={obj.poster_path ?
                        `${MOVIE_IMAGE_BASE_URL}${MOVIE_POSTER_SIZE}${obj.poster_path}`
                        : no_image}
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