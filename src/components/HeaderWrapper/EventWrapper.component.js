import React from 'react';
import { FiFilter } from 'react-icons/fi';

import styles from './HeaderWrapper.module.css';

const EventWrapper = ({ children, scrollY, styling }) => {
    return (
        <section className={`${styles.eventWrapper} ${styles.eventWrapper}`}>
            <div className={`${styles.eventWrapperDotted}`}>
                <div className={`${styles.headerContent} ${styling}`}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default EventWrapper;