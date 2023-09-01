import React from 'react'

import PropTypes from 'prop-types'
import cover from '../assets/pink-green-drops.jpg'
import './Card.css'

const Card = ({ alt, id, flipped, src, handleCardClick }) => {
    const handleClick = () => {
        if (!flipped) {
            console.log('id', id)
            handleCardClick(id) // Notify the parent component that the card was clicked
        }
    }
    return (
        <div>
            <div
                className={`front-side ${flipped ? 'hidden' : ''}`}
                onClick={handleClick}
            >
                <img className="card-image" src={cover} alt="cover"></img>
            </div>
            <div className={`back-side ${flipped ? '' : 'hidden'}`}>
                <img className="card-image" src={src} alt={alt}></img>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    flipped: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    handleCardClick: PropTypes.func,
}
export default Card
