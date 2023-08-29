import { useEffect, useState } from 'react'
import Card from './components/Card'
import Footer from './components/Footer'
import cat1 from './assets/cats/cat1.png'
import cat2 from './assets/cats/cat2.png'
import cat3 from './assets/cats/cat3.png'
import cat4 from './assets/cats/cat4.png'
import cat5 from './assets/cats/cat5.png'
import cat6 from './assets/cats/cat6.png'
import cat7 from './assets/cats/cat7.png'
import cat8 from './assets/cats/cat8.png'
import cover from './assets/pink-green-drops.jpg'
import './App.css'

const App = () => {
    const [cards, setCards] = useState(null)
    const items = [
        {
            id: 1,
            src: cat1,
            alt: 'cat1',
            matchFound: false,
            flipped: false,
        },
        {
            id: 2,
            src: cat2,
            alt: 'cat2',
            matchFound: false,
            flipped: false,
        },
        {
            id: 3,
            src: cat3,
            alt: 'cat3',
            matchFound: false,
            flipped: false,
        },
        {
            id: 4,
            src: cat4,
            alt: 'cat4',
            matchFound: false,
            flipped: false,
        },
        {
            id: 5,
            src: cat5,
            alt: 'cat5',
            matchFound: false,
            flipped: false,
        },
        {
            id: 6,
            src: cat6,
            alt: 'cat6',
            matchFound: false,
            flipped: false,
        },
        {
            id: 7,
            src: cat7,
            alt: 'cat7',
            matchFound: false,
            flipped: false,
        },
        {
            id: 8,
            src: cat8,
            alt: 'cat8',
            matchFound: false,
            flipped: false,
        },
    ]
    const coverCard = [
        {
            id: 1,
            src: cover,
            alt: 'green-dots-cover',
            matchFound: false,
            flipped: false,
        },
    ]
    // const resetCards = () => {
    //     const shuffled = []
    //     for (let i = 0; i <= 15; i += 1) {
    //         shuffled.push(coverCard[0])
    //     }

    //     setCards(shuffled)
    // }

    const resetCards = () => {
        const shuffled = [...items, ...items]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, key: Math.random() }))
        setCards(shuffled)
    }

    useEffect(() => {
        resetCards()
    }, [])

    return (
        <div className="main">
            <header>
                <h1>Kitty Wonderland </h1>
            </header>
            <article>
                <p> Welcome to Kitty Wonderland, a card maching game! </p>
                <button> Start game</button>
                <div className="main-container">
                    <div className="card-grid-container">
                        {cards &&
                            Object.values(cards).map((card) => (
                                <Card key={card.id} card={card}></Card>
                            ))}
                    </div>
                </div>
                <div>
                    <p>Matches found/ Score</p>
                </div>
            </article>
            <Footer> </Footer>
        </div>
    )
}

export default App
