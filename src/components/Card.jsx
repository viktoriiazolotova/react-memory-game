import React from 'react'
import PropTypes from 'prop-types'
import cover from '../assets/pink-green-drops.jpg'
import './Card.css'

const Card = ({ alt, id, src, handleCardClick }) => {
    return (
        <div>
            {/* <div className="front-side">
                <img className="card-image" src={cover} alt="cover"></img>
            </div> */}
            <div className="back-side">
                <img
                    className="card-image"
                    src={src}
                    alt={alt}
                    onClick={handleCardClick}
                ></img>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    handleCardClick: PropTypes.func,
}
export default Card
