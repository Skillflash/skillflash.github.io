import React from 'react';
import { FiFilter } from 'react-icons/fi';

import styles from './HeaderWrapper.module.css';

const HeaderWrapper = ({ children, scrollY }) => {
    return (
        <section className={`${styles.mainWrapper} ${styles.back} from-secondary-yellow via-secondary-pink to-primary-lila`}>
            <div className={`${styles.mainWrapperDotted}`}>
                <div className={`${styles.headerContent}`}>
                    {children}
                    <button className={`${styles.headerButton} ${scrollY >= 390 && styles.headerButtonFixed}`}>
                        <h6 className={`${styles.headerButtonText} ${scrollY >= 390 ? `from-secondary-pink to-secondary-yellow` : 'from-neutral-white to-neutral-white'}`}>Suche konfigurieren</h6>
                        <FiFilter className={`${styles.headerButtonIcon} ${scrollY >= 390 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                    </button>
                </div>
                <div className={`${styles.headerBottomCurve}`}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={`${styles.headerBottomCurveFill}`}></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default HeaderWrapper;