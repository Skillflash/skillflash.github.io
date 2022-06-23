import React from 'react';

import styles from './Button.module.css';

const HeroButton = props => {
    const { title, icon } = props;

    return (
        <button className={`${styles.heroButton} bg-primary-orange`}>
            <p className={`${styles.heroButtonText} text-neutral-white`}>{title}</p>
            <img src={icon} alt={title}  className={`${styles.heroButtonIcon}`} />
        </button>
    )
}

export default HeroButton;