import React from 'react';
import { HeroButton, Search } from '../../components';
import { arrow_down } from '../../resources/Icons';

import { arrow, call_out, hero } from '../../resources/Images';
import styles from './Header.module.css';

const Header = props => {
    return (
        <section className={`${styles.mainWrapper} ${styles.back} from-secondary-yellow via-secondary-pink to-primary-lila`}>
            <div className={`${styles.headerContent}`}>
                <h2 className={`${styles.headerContentTitle} text-neutral-white`}>Bring Deine Skills aufs nächste Level</h2>
                <h4 className={`${styles.headerContentSubTitle} text-neutral-white`}>Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.</h4>
                {/* <div className={`${styles.headerContentWrapper}`}> */}
                   <Search />
                {/* </div> */}
            </div>
            <div className={`${styles.headerBottomCurve}`}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={`${styles.headerBottomCurveFill}`}></path>
                </svg>
            </div>
        </section>
    )
}

export default Header;


// old design

{/* <div className={`${styles.heroWrapper}`}>
                <div className={`${styles.heroThought}`}>
                    <div className={`${styles.heroThoughtImageWrapper}`}>
                        <img src={call_out} alt="call_out" className={`${styles.heroThoughtImage}`} />
                        <p className={`${styles.heroThoughtText} text-neutral-white`}>Gib einfach ein Thema ein und wir finden die richtige Expertise dazu!</p>
                    </div>
                    <img src={arrow} alt="arrow" className={`${styles.heroArrow}`} />
                </div>
                <div className={`${styles.heroTitleWrapper}`}>
                    <h3 className={`${styles.heroTitle} text-neutral-white`}>Hi 👋 suchst Du </h3>
                    <h3 className={`${styles.heroSubTitle} text-neutral-white`}>Expertise für die Praxis?</h3>
                    <p className={`${styles.heroWelcomText}  text-neutral-white`}>
                        Bei uns findest Du Expert: innen und online sowie offline Events 
                        zu diversen Themen aus der Praxis. Schenll, einfach und persönlich.
                    </p>
                    <div className={`${styles.heroButtonWrapper}`}>
                        <HeroButton title={'Entdecken'} icon={arrow_down} />
                    </div>
                </div>
            </div> */}