import React from 'react'
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'

// import bg from './assets/bg3.jpg'


// const styleBg = {
//   background: bg
// }

// console.log(styleBg);

const App = () => {
    return (
        <div>
            <Header
            />
            <Layout
                title="Первый Layout"
                colorBg
            />
            <Layout
                title="Второй Layout"
                
            />
            <Layout
                title="Третий Layout"
                colorBg
            />
            <Footer />
        </div>
    )
}

export default App
