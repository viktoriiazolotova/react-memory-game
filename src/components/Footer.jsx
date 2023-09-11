import React from 'react'
import { FaCat } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>
                Build with 💙 ,{<FaCat size={15} className="icon-cat" />} & ☕️
            </p>
            <p>Viktoriia Zolotova 2023</p>
        </div>
    )
}

export default Footer
