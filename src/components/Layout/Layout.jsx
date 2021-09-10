import React from 'react'
import style from './Layout.module.css'

const Layout = ({ title, desc, imgBg, colorBg}) => {
    const styleRoot = imgBg ? {background: `url(${imgBg})`} : {background: `${colorBg}`}
    return (
        <div>
            <section className={style.root} style={styleRoot}>
                <div className={style.wrapper}>
                    <article>
                        <div className={style.title}>
                            <h3>{title}</h3>
                            <span className={style.separator}></span>
                        </div>
                        <div className={`${style.desc} ${style.full}`}>
                            <p>{desc}</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Layout
