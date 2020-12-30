import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url}) => {
    return (
        <div className="images__item animate__animated animate__bounce">
            <h5 className="image__title">
                {title}
            </h5>
            <img 
                src={url} 
                alt={title} 
                className="image__source" 
            />
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}