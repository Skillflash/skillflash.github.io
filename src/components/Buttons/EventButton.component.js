import React from 'react';

import styles from './Button.module.css';

const EventButton = props => {
    const { children } = props;
    return (
        <button className={`${styles.eventButton} from-secondary-pink to-secondary-yellow`}>
            {children}
        </button>
    )
}

export default EventButton;