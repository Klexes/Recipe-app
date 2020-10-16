import React from 'react'

const Recipe = ({ title, image, cal}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{cal}</p>
            <img src={image} />
        </div>
    )
}

export default Recipe
