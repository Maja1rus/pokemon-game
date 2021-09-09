import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <div>
            <header className={style.root}>
                <div className={style.forest}></div>
                <div className={style.container}>
                    <h1>This is title</h1>
                    <p>This is Description!</p>
                </div>
            </header>
        </div>
    )
}

export default Header
