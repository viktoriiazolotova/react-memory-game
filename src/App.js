import { useEffect, useState } from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import Card from './components/Card'
import Footer from './components/Footer'
import { items } from './cardsData'

// import cover from './assets/pink-green-drops.jpg'
import './App.css'

const App = () => {
    const [cards, setCards] = useState(null)
    // const [openCards, setOpenCards] = useState([]) // Maintain a state for open cards

    const resetCards = () => {
        // create copy of items array and assign new ids
        const itemsCopy = items.map((item, id) => ({
            ...item,
            id: id + items.length + 1,
        }))
        // console.log('items before shuffle', itemsCopy)
        const allItems = [...items, ...itemsCopy]
        console.log('items before shuffle', allItems)
        const shuffled = allItems.sort(() => Math.random() - 0.5)

        console.log('shuffled', shuffled)
        setCards(shuffled)
    }

    useEffect(() => {
        resetCards()
    }, [])

    const handleNewGameClick = () => {
        console.log('click on start game')
        resetCards()
    }

    // const handleCardClick = () => {
    //     console.log('card is clicked')
    //     // todo
    // }

    // const handleCardClick = (id) => {
    //     const clickedCard = cards.find((card) => card.id === id)
    //     console.log('clicked card', clickedCard)

    //     if (clickedCard) {
    //         const alreadyOpen = openCards.some((card) => card.id === id)

    //         if (!alreadyOpen) {
    //             const newOpenCards = [...openCards, clickedCard]

    //             setOpenCards(newOpenCards)

    //             if (newOpenCards.length === 2) {
    //                 // Check for a match
    //                 if (newOpenCards[0].src === newOpenCards[1].src) {
    //                     // Handle a match (e.g., increment the match count, disable the cards)
    //                     // You can implement this logic here
    //                 } else {
    //                     // No match, so flip the cards back
    //                     setTimeout(() => {
    //                         setOpenCards([])
    //                     }, 1000) // Adjust the delay as needed
    //                 }
    //             }
    //         }
    // }
    // }
    const handleCardClick = (id) => {
        const updatedCards = cards.map((card) => {
            if (card.id === id && !card.flipped) {
                return { ...card, flipped: true }
            }
            return card
        })

        setCards(updatedCards)
        console.log(cards)
    }

    return (
        <div className="main-page">
            <h1>Kitty Wonderland </h1>
            <p> Welcome to Kitty Wonderland, a card maching game! </p>

            <div>
                <button
                    className="new-game-button"
                    onClick={handleNewGameClick}
                >
                    <BiPlayCircle size={20} /> Start Game
                </button>
                <div className="main-container">
                    <div className="card-grid-container">
                        {cards &&
                            Object.values(cards).map(
                                ({ id, src, alt, flipped }) => (
                                    <Card
                                        key={id}
                                        id={id}
                                        src={src}
                                        alt={alt}
                                        flipped={flipped}
                                        handleCardClick={handleCardClick}
                                    ></Card>
                                ),
                            )}
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
