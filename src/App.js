import { useEffect, useState } from 'react'
import Card from './components/Card'
import Footer from './components/Footer'
// import { BiLogoReact } from 'react-icons/bi'
// import { FaGithub } from 'react-icons/fa'
// // import { SiFreepik } from 'react-icons/si'
// import { SiNetlify } from 'react-icons/si'
import { items } from './cardsData'
import { getRandomItemsFromArray } from './utils/helperFunctions'
import { launchConfetti } from './components/Confetti'

import './App.css'
import Button from './components/Button'
import TechStack from './components/TechStack'

const App = () => {
    const [cards, setCards] = useState(null)
    const [firstSelected, setFirstSelected] = useState(null)
    const [secondSelected, setSecondSelected] = useState(null)
    const [matchCount, setMatchCount] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [moves, setMoves] = useState(0)

    const randomItems = getRandomItemsFromArray(items, 8)

    const shuffleCards = () => {
        let i = 1
        const shuffledCards = [...randomItems, ...randomItems]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({
                ...card,
                id: i++,
            }))
        setCards(shuffledCards)
        setMatchCount(0)
        setMoves(0)
        console.log(shuffledCards)
    }

    useEffect(() => {
        shuffleCards()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSelection = (card) => {
        firstSelected ? setSecondSelected(card) : setFirstSelected(card)
    }

    useEffect(() => {
        if (firstSelected && secondSelected) {
            setMoves(moves + 1)
            setDisabled(true)
            if (firstSelected.src === secondSelected.src) {
                const updatedCards = cards.map((card) => {
                    if (card.src === firstSelected.src) {
                        return { ...card, matchFound: true }
                    }
                    return card
                })
                setMatchCount(matchCount + 1)
                checkForCompletion()
                setCards(updatedCards)
                resetSelections()
            } else {
                setTimeout(() => resetSelections(), 1000)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstSelected, secondSelected])

    const resetSelections = () => {
        setFirstSelected(null)
        setSecondSelected(null)
        setDisabled(false)
    }

    const checkIsFlipped = (card) => {
        return (
            card === firstSelected || card === secondSelected || card.matchFound
        )
    }

    const checkForCompletion = () => {
        if (cards && matchCount === cards.length / 2) {
            launchConfetti()
        }
    }
    useEffect(() => {
        checkForCompletion()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchCount])

    return (
        <div className="main-page">
            <h1>Kitty Wonderland </h1>
            <p>Welcome to Kitty Wonderland, a maching kitten pairs game!</p>
            <TechStack />
            {/* <div className="techstack">
                Powered by <BiLogoReact size={20} className="tech-icon" />{' '}
                React,
                <a href="https://www.netlify.com">
                    {' '}
                    <SiNetlify size={20} className="tech-icon" />{' '}
                </a>{' '}
                Netlify, <FaGithub size={20} className="tech-icon" /> GitHub and
                Freepik
            </div> */}
            {/* <a href="https://www.freepik.com/" target="_blank" rel="noreferrer">
                Images
            </a> */}
            {/* <span>by catalyststuff on Freepik</span> */}
            <div>
                <Button shuffleCards={shuffleCards}></Button>
                <div className="main-container">
                    <div className="card-grid-container">
                        {cards &&
                            Object.values(cards).map((card) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    flipped={checkIsFlipped(card)}
                                    disabled={disabled}
                                    handleSelection={handleSelection}
                                ></Card>
                            ))}
                    </div>
                </div>
                <div className="score">
                    <p>
                        MATCHES FOUND:
                        <span>{matchCount}</span>
                    </p>
                    <p>
                        MOVES:<span>{moves}</span>
                    </p>
                </div>
            </div>

            <Footer> </Footer>
        </div>
    )
}

export default App
