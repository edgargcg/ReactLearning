import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0});
    const { x, y } = coords;
    
    const mouseMouve = (e) => {
        const coords = { x: e.x, y: e.y};
        setCoords(coords);
    };

    useEffect(() => {
        window.addEventListener('mousemove', mouseMouve);
        
        return () => {
            window.removeEventListener('mousemove', mouseMouve);
            console.log('Message unmounted');
        }
    }, [])

    return (
        <div className="alert alert-danger">
            X: {x} Y: {y}
        </div>
    )
}
