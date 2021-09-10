import React from 'react'
import style from './Layout.module.css'

const Layout = ({ id, title, imgBg, colorBg, children}) => {
  const styleRoot = {};
    
    if (imgBg) {
        styleRoot.backgroundImage = `url(${imgBg})`;
    }

    if (colorBg) {
        styleRoot.backgroundColor = colorBg;
    }

    return (
        <div>
            <section
                className={style.root}
                style={styleRoot}
                id={id}
            >
                <div className={style.wrapper}>
                    <article>
                        <div className={style.title}>
                            <h3>{title}</h3>
                            <span className={style.separator}></span>
                        </div>
                        <div className={`${style.desc} ${style.full}`}>
                            {children}
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Layout
