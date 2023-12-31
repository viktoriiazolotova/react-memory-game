import React from 'react'
import PropTypes from 'prop-types'
import cover from '../assets/pink-green-orange-drops-pattern.avif'
import './Card.css'

const Card = ({ card, handleSelection, flipped, disabled }) => {
    const handleClick = () => {
        console.log('this is called')
        if (!disabled) {
            handleSelection(card)
        }
    }

    return (
        <div className="card">
            <div className={`${flipped ? 'flipped' : ''}`}>
                <img
                    className="card-image front"
                    src={card.src}
                    alt={card.alt}
                ></img>
                <img
                    className="card-image back "
                    src={cover}
                    alt="pink greenorange drops pattern cover"
                    onClick={handleClick}
                ></img>
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
    }).isRequired,
    flipped: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleSelection: PropTypes.func.isRequired,
}
export default Card
