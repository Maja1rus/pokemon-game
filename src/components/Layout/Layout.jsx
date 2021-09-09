import React from 'react'
import style from './Layout.module.css'

import bg from '../../assets/bg3.jpg'

const Layout = ({ title, desc, colorBg }) => {
    // const styleRoot = colorBg ? {background: '#357e51'} : {}
    const styleRoot = colorBg ? {background: `url(${bg})`} : {background: '#357e51'}
    return (
        <div>
            <section className={style.root} style={(styleRoot)}>
                <div className={style.wrapper}>
                    <article>
                        <div className={style.title}>
                            <h3>{title}</h3>
                            <span className={style.separator}></span>
                        </div>
                        <div className={(style.desc, style.full)}>
                            <p>{desc}</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Layout
