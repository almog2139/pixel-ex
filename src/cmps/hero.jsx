import React from 'react'
import heroBg from '../assets/imgs/bg-hero.png'        
import heroBgMobile from '../assets/imgs/hero-bg-mobile.png'        
import logo from '../assets/imgs/logo.svg'

export function Hero() {
    return (
        <section className="hero flex">
            <div className="hero-text flex column">
                <img src={logo} alt="" className="logo" />
                 <span>
                    Exquisite dining
                    since 1989
                </span> 
                <p>
                Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
                </p>
                <button>
                BOOK A TABLE
                </button>  

            </div>
            <img src={heroBg} alt="" className="hero-bg"/>
            <img src={heroBgMobile} alt="" className="hero-bg-mobile none"/>


        </section>
    )
}
