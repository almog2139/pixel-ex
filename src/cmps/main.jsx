import enjoyableDesktop from '../assets/imgs/enjoyable-place-desktop.jpg'
import enjoyableMobile from '../assets/imgs/enjoyable-place-mobile.jpg'
import locallyMobile from '../assets/imgs/locally-sourced-mobile.jpg'
import locallyDesktop from '../assets/imgs/locally-sourced-desktop.jpg'
import patternDivide from '../assets/imgs/pattern-divide.svg'
import patternLines from '../assets/imgs/pattern-lines.svg'
import divBg from '../assets/imgs/div-bg.png'

export  function Main() {
    return (
        <div className="main flex column">
            <div className="section flex">
                <img src={enjoyableDesktop} alt="" className="enjoyableDesktop" />
                <div className="div-img-bg left"></div>
                <div className="flex column main-tetx right">
                    <img src={patternDivide} className="patternDivide right" />
                    <p className="main-title">
                        Enjoyable place
                        for all the family
                   </p>
                    <p className="main-desc">
                        Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.
                   </p>
                </div>

            </div>


            <div className="section flex">
                <div className="main-tetx left flex column">

                    <img src={patternDivide} className="patternDivide left " />
                    <p className="main-title">The most locally sourced food</p>
                    <p className="main-desc">All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>

                </div>
                <img src={locallyDesktop} className="locallyDesktop"/>
                <div className="div-img-bg right"></div>
                <img src={patternLines} className="patternLines"/>
            </div>

        </div>
    )
}



