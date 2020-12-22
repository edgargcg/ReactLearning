import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="images__item animate__animated animate__bounce">
            <h5 className="image__title">
                {title}
            </h5>
            <img src={url} alt={title} className="image__source" />
        </div>
    )
}
