import React from 'react'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'

import bg from './assets/bg3.jpg'

const App = () => {
    return (
        <div>
            <Header />
            <Layout title="First Layout" desc="First description" imgBg={bg} />
            <Layout
                title="Second Layout"
                desc="Second description"
                colorBg="#546747"
            />
            <Layout title="Third Layout" desc="Third description" imgBg={bg} />
            <Footer />
        </div>
    )
}

export default App
