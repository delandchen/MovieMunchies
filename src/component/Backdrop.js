import React from 'react'
import classes from './component.module.css'

const Backdrop = (props) => {
    return (
        <div className={classes.Backdrop} onClick={props.closeModal}>

        </div>
    )
}

export default Backdrop;