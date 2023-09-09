import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GiHollowCat } from 'react-icons/gi'
import { GoPlay } from 'react-icons/go'
import './Button.css'

const Button = ({ shuffleCards }) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <button
            className="new-game-button"
            onClick={shuffleCards}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ? <GiHollowCat size={25} /> : <GoPlay size={25} />} Start
            Game
        </button>
    )
}

Button.propTypes = {
    shuffleCards: PropTypes.func.isRequired,
}

export default Button
