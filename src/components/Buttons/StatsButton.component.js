import React from 'react';

import styles from './Button.module.css';

const StatsButton = props => {
    const { children, invert } = props;

    return (
        <button className={`${styles.statsButton} ${invert ? 'bg-primary-blue' : 'bg-neutral-white'} `}>
            {children}
        </button>
    )
}

export default StatsButton;