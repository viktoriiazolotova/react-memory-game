import React from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
// import { SiFreepik } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import './TechStart.css'

const TechStack = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <BiLogoReact size={20} className="tech-icon" /> React
                </>
            ),
            href: 'https://react.dev',
        },
        {
            id: 2,
            child: (
                <>
                    <SiNetlify size={20} className="tech-icon" />
                    Netlify
                </>
            ),
            href: 'https://netlify.com',
        },
        {
            id: 3,
            child: (
                <>
                    <FaGithub size={20} className="tech-icon" />
                    GitHub
                </>
            ),
            href: 'https://github.com/viktoriiazolotova/react-memory-game',
        },
        {
            id: 3,
            child: (
                <>
                    {/* <SiFreepik size={20} className="tech-icon" /> */}
                    Freepik
                </>
            ),
            href: 'https://www.freepik.com/',
        },
    ]

    return (
        <div className="techstack">
            Powered by
            {links.map(({ id, child, href }) => (
                <a
                    key={id}
                    className="tech-icon"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {child}
                </a>
            ))}
        </div>
    )
}

export default TechStack
