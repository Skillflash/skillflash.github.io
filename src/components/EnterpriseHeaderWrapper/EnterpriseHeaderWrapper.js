import React from 'react';
import styles from './EnterpriseHeaderWrapper.module.css';

const EnterpriseHeaderWrapper = ({ children, scrollY }) => {
    return (
        <section className={`${styles.mainWrapper} ${bgGradient}`}>
            <div className={`${styles.mainWrapperDotted}`}>
                <div className={`${styles.headerContent}`}>
                    {children}
                    <button className={`${styles.headerButton} ${scrollY >= 390 && styles.headerButtonFixed}`}>
                    </button>
                </div>
                <div className={`${styles.customShapeDividerTop}`}>
                <div class="custom-shape-divider-top-1657727554">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"  className={`${styles.customShapeDividerTopFill}`}></path>
    </svg>
</div>
                </div>
            </div>
        </section>
    )
}

export default EnterpriseHeaderWrapper;

const bgGradient = "from-secondary-yellow to-secondary-pink md:from-secondary-yellow md:via-secondary-pink md:to-primary-lila";