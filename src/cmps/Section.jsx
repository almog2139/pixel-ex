import familyDesktop from '../assets/imgs/family-gathering-desktop.jpg'
import divBg from '../assets/imgs/div-bg.png'
import patternLines from '../assets/imgs/pattern-lines.svg'
import iconMinus from '../assets/imgs/icon-minus.svg'

export function Section() {
    return (
        <div className="section">
            <div className="div-bg"></div>
            <div className="section-container flex">
                <div>
                    <img src={familyDesktop} className="family-img" />
                    <img src={patternLines} className="pattern-lines" />
                    <img src={iconMinus} alt="" className="icon-minus"/>
                </div>
                <div className="section-text flex column">
          
                   <div className=" flex column">
                        <p className="section-title">Family Gathering</p>
                        <p className="section-desc">
                        We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.
                        </p>
                        <button>BOOK A TABLE</button>
                   </div>
                        <div className="spans flex column">
                        <span>FAMILY GATHERING</span>
                        <span>SPECIAL EVENTS</span>
                        <span>SOCIAL EVENTS</span>
                        </div>

                 


                </div>

            </div>
        </div>
    )
}
