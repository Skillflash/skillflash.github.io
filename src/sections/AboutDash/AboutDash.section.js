import React from 'react';
import { IoRocket } from 'react-icons/io5';
import { avatar1, avatar14, CMSDashboard } from '../../resources/Images';

import styles from './AboutDash.module.css';

const AboutDash = () => {
    return (
        <section className={`${styles.mainWrapper} ${styles.radialWrapper}`}>
            <div className={`${styles.mainDotWrapper}`}>
                <div className={`${styles.topCurve}`}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  className={`${styles.topCurveFill}`}></path>
                    </svg>
                </div>
                <div className={`${styles.contentWrapper}`}>
                    <div className={`${styles.aboutWrapper}`}>
                        <img alt='about' src={avatar14}  className={`${styles.aboutWrapperImage}`} />
                        <h6 className={`${styles.aboutWrapperTitle} text-neutral-white`}>Antonia nutzt das Dashboard..</h6>
                    </div>
                    <p className={`${styles.aboutText} text-neutral-white`}>
                        ..einerseits zum Erstellen von Formaten, wie zum Beispiel Events und <br /> 
                        andererseits zum Verwalten von Buchungen oder fürs Marketing ihrer Angebote.
                    </p>
                    <img alt='dashboard' src={CMSDashboard} className={`${styles.dashBoard}`}/>
                    <button className={`${styles.aboutButton} bg-neutral-white`}>
                        <p className={`${styles.aboutButtonText}`}>Demo vereinbaren</p>
                        <IoRocket className={`${styles.aboutButtonIcon} text-primary-orange`} />
                    </button>
                </div>
                <div className={`${styles.bottomCurve}`}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"  className={`${styles.bottomCurveFill}`}></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default AboutDash;