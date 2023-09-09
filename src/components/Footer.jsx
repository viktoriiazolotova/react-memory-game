import React from 'react'
import { FaCat } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>
                Build with 💙 and with
                {<FaCat size={20} className="icon-cat" />} by Viktoriia Zolotova
                2023
            </p>
        </div>
    )
}

export default Footer
