import React from 'react';

import styles from './Inputs.module.css';

const SumbitInput = props => {
    const { label, placeholder } = props;
    return (
        <div className={`${styles.submitWrapper} bg-neutral-white`}>
            <label className={`${styles.submitLabel} text-primary-lila bg-neutral-white`}>Für Rückfragen {label}</label>
            <input className={`${styles.submitField} text-neutral-black`} placeholder={placeholder} />
        </div>
    )
}

export default SumbitInput;