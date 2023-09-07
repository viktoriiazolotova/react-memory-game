import { useEffect, useState } from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import Card from './components/Card'
import Footer from './components/Footer'
import { items } from './cardsData'
import { launchConfetti } from './components/Confetti'

import './App.css'

const App = () => {
    const [cards, setCards] = useState(null)
    const [firstSelected, setFirstSelected] = useState(null)
    const [secondSelected, setSecondSelected] = useState(null)
    const [matchCount, setMatchCount] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [moves, setMoves] = useState(0)

    const shuffleCards = () => {
        let i = 1
        const shuffledCards = [...items, ...items]
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
    }, [])

    const handleSelection = (card) => {
        firstSelected ? setSecondSelected(card) : setFirstSelected(card)
        setMoves(moves + 1)
    }

    useEffect(() => {
        if (firstSelected && secondSelected) {
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
            console.log('you won')
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
            <p> Welcome to Kitty Wonderland, a maching kitten pairs game! </p>

            <div>
                <button className="new-game-button" onClick={shuffleCards}>
                    <BiPlayCircle size={20} /> Start Game
                </button>
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
