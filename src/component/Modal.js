import React from 'react'
import classes from './component.module.css'
import {MOVIE_IMAGE_BASE_URL, MOVIE_POSTER_SIZE} from '../config'


class Modal extends React.Component {
    // Accesses the movie object details and displays it
    constructor(props) {
        super(props);
        this.runtimeHours = Math.floor(props.movie.runtime / 60)
        this.runtimeMinutes = (props.movie.runtime % 60)
        this.revenue = ((props.movie.revenue) / 1000000).toFixed(2)  // To millions and precision of 2 decimals
        this.releaseDate = props.movie.release_date
        this.image = `${MOVIE_IMAGE_BASE_URL}${MOVIE_POSTER_SIZE}${props.movie.poster_path}`
        this.title = props.movie.title
        this.overview = props.movie.overview
    };

    render() {
        return (
            <div className={classes.Modal} style={{backgroundImage: `url(${this.image})`}}>
                <div className={classes.modalText}>
                <h1>{this.title}</h1>
                <h3> Release Date: {this.releaseDate}</h3>
                <h3>Runtime: {this.runtimeHours}h {this.runtimeMinutes}m</h3>
                <h3> Revenue: ${this.revenue} million </h3>
                <p>{this.overview}</p>
                </div>
            </div>
        )
    }
}

export default Modal;