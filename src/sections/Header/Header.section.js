import React from 'react';
import { FiFilter } from 'react-icons/fi';
import { HeaderWrapper, Search } from '../../components';

import styles from './Header.module.css';

const Header = props => {
    const { scrollY } = props;
    return (
        <HeaderWrapper scrollY={scrollY}>
            <h2 className={`${styles.headerContentTitle} text-neutral-white`}>Bring Deine Skills aufs nächste Level</h2>
            <h4 className={`${styles.headerContentSubTitle} text-neutral-white`}>Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.</h4>
            <Search />   
        </HeaderWrapper>
    )
}

export default Header;


// old design

/* <div className={`${styles.heroWrapper}`}>
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
            </div> */