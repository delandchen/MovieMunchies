import React from 'react'
import classes from './component.module.css'
import {MOVIE_IMAGE_BASE_URL, MOVIE_POSTER_SIZE} from '../config'


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.runtime = props.movie.runtime
        this.revenue = props.movie.revenue
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
                <h2>{this.releaseDate}</h2>
                <p>{this.overview}</p>
                </div>
            </div>
        )
    }
}

export default Modal;