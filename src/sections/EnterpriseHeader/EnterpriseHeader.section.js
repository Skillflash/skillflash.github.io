import React from 'react';
import { FiFilter } from 'react-icons/fi';
import { IoBulbOutline } from 'react-icons/io5';
import { EnterpriseWrapper } from '../../components';

import styles from './Header.module.css';

const EnterpriseHeader = props => {
    const { scrollY } = props;
    return (
        <EnterpriseWrapper scrollY={scrollY}>
            <h2 className={`${styles.headerContentTitle} text-neutral-white`}>
                Mach das Beste aus den Skills Deiner Communty
                <br />
                <span className={`${styles.headerContentTitleSub}`}>mit Skillflash Enterprise</span>
            </h2>
            <p className={`${styles.headerContentSubTitle} text-neutral-white`}>
                Eine Plattform mit online und offline Formaten in individuellem Branding.
                Darüber machen wir Bildungsformate erreichbarer, vernetzen Regionen
                und fördern die Entwicklung jedes Einzelnen.
            </p>
            <button className={`${styles.headerButton} ${scrollY >= 200 && styles.headerButtonFixed}`}>
                <h6 className={`${styles.headerButtonText} ${scrollY >= 200 ? `from-secondary-pink to-secondary-yellow` : 'from-neutral-white to-neutral-white'}`}>Verstehen wie's geht</h6>
                <IoBulbOutline className={`${styles.headerButtonIcon} ${scrollY >= 200 ? 'text-primary-orange' : 'text-neutral-white'}`} />
            </button>
        </EnterpriseWrapper>
    )
}

export default EnterpriseHeader;


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