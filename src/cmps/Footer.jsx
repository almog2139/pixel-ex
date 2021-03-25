import logo from '../assets/imgs/logo.svg'

export function Footer() {
    return (
        <footer className="footer">
            <div className="main-layout flex">
                <img src={logo} className="logo img"/>

                    <div className="pos flex column">
                        <p>Marthwaite, Sedbergh</p>
                        <p>Cumbria</p>
                        <p>+00 44 123 4567</p>
                    </div>
     

                    <div className="open-times flex column">
                        <p> OPEN TIMES</p>
                        <p>MON - FRI: 09:00 AM - 10:00 PM</p>
                        <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
                    </div>
         </div>
     </footer>
    )
}
