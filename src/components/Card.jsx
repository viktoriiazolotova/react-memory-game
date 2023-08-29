import React from 'react'
import cover from '../assets/pink-green-drops.jpg'
import './Card.css'

const Card = ({ card }) => {
    return (
        <div>
            <div className="front-side">
                <img
                    className="card"
                    width="150px"
                    height="150px"
                    src={cover}
                    alt="cover"
                ></img>
            </div>
            {/* <div className="back-side">
                <img
                    className="card"
                    width="150px"
                    height="150px"
                    src={card.src}
                    alt={card.alt}
                ></img>
            </div> */}
        </div>
    )
}

export default Card
