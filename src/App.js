import React from 'react'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import PokemonCard from './components/PokemonCard/PokemonCard'

import bg from './assets/bg3.jpg'

const POKEMONS = require('./data/pokemon.json')

const App = () => {
    return (
        <div>
            <Header title="Pokemon Game" />
            <Layout
                id="rules"
                title="First Layout"
                desc="First description"
                imgBg={bg}
            >
                <p>
                    In the game two players face off against one another, one
                    side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to
                    capture the opponent's cards by turning them into the
                    player's own color of red or blue.
                </p>
            </Layout>
            <Layout
                title="Second Layout"
                desc="Second description"
                colorBg="#546747"
            >
                <div className="flex">
                    {POKEMONS.map((item) => (
                        // <PokemonCard key={item.id} {...item} />
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                        />
                    ))}
                </div>
            </Layout>
            <Layout title="Third Layout" desc="Third description" imgBg={bg}>
                <p>
                    n the game two players face off against one another, one
                    side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to
                    capture the opponent's cards by turning them into the
                    player's own color of red or blue.
                </p>
            </Layout>
            <Footer />
        </div>
    )
}

export default App
