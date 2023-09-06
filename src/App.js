import { useEffect, useState } from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import Card from './components/Card'
import Footer from './components/Footer'
import { items } from './cardsData'

import './App.css'

const App = () => {
    const [cards, setCards] = useState(null)
    const [firstSelected, setFirstSelected] = useState(null)
    const [secondSelected, setSecondSelected] = useState(null)

    // const [openCards, setOpenCards] = useState([])
    // const [machedCards, setMachedCards] = useState({})

    const shuffleCards = () => {
        const shuffledCards = [...items, ...items]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({
                ...card,
                id: Math.random() * 10,
            }))
        setCards(shuffledCards)
        console.log(shuffledCards)
    }

    useEffect(() => {
        shuffleCards()
    }, [])

    const handleSelection = (card) => {
        firstSelected ? setSecondSelected(card) : setFirstSelected(card)
    }

    useEffect(() => {
        if (firstSelected && secondSelected) {
            if (firstSelected.src === secondSelected.src) {
                const updatedCards = cards.map((card) => {
                    if (card.src === firstSelected.src) {
                        return { ...card, matchFound: true }
                    }
                    return card
                })

                setCards(updatedCards)
                resetSelections()
            } else {
                setTimeout(() => resetSelections(), 2000)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstSelected, secondSelected])

    const resetSelections = () => {
        setFirstSelected(null)
        setSecondSelected(null)
        console.log('updated cards after', cards)
    }

    const checkIsFlipped = (card) => {
        return (
            card === firstSelected || card === secondSelected || card.matchFound
        )
    }

    return (
        <div className="main-page">
            <h1>Kitty Wonderland </h1>
            <p> Welcome to Kitty Wonderland, a card maching game! </p>

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
                                    handleSelection={handleSelection}
                                ></Card>
                            ))}
                    </div>
                </div>
                <div>
                    <p>
                        Matches found: <span>0</span>
                    </p>
                </div>
            </div>

            <Footer> </Footer>
        </div>
    )
}

export default App
