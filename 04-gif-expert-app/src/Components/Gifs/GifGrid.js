import React, {  } from 'react'
import { useFetchGifs } from '../../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <div>
            <h3>
                {category}
            </h3>
            {loading && <p>Loading</p> }
            <div className="images">
                {
                    images.map(
                        img => 
                        (
                            <GifGridItem 
                                {...img} 
                                key={img.id} 
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}