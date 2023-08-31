import { useEffect, useState } from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import Card from './components/Card'
import Footer from './components/Footer'
import { items } from './cardsData'

// import cover from './assets/pink-green-drops.jpg'
import './App.css'

const App = () => {
    const [cards, setCards] = useState(null)

    const resetCards = () => {
        // create copy of items array and assign new ids
        const itemsCopy = items.map((item, id) => ({
            ...item,
            id: id + items.length + 1,
        }))
        const shuffled = [...items, ...itemsCopy].sort(
            () => Math.random() - 0.5,
        )

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

    const handleCardClick = () => {
        console.log('card is clicked')
    }

    return (
        <div className="main-page">
            <h1>Kitty Wonderland </h1>
            <p> Welcome to Kitty Wonderland, a card maching game! </p>

            <div>
                <button
                    className="new-game-button"
                    onClick={() => handleNewGameClick()}
                >
                    <BiPlayCircle size={20} /> Start Game
                </button>
                <div className="main-container">
                    <div className="card-grid-container">
                        {cards &&
                            Object.values(cards).map(({ id, src, alt }) => (
                                <Card key={id} id={id} src={src} alt={alt}>
                                    onClick={handleCardClick}
                                </Card>
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
