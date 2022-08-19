import React from 'react';
import Typed from 'react-typed';

import styles from './Loader.module.css';

const Loading = props => {
    let words = ["Loading...", "Skillflash...", "One sec..."];
    return (
        <div className={`${styles.loadingWrapper}`}>
            <Typed
                className={`${styles.animateCharacter} text-neutral-white`}
                strings={[...words]}
                typeSpeed={40}
                backSpeed={60}
                backDelay={3000}
                shuffle
                loop
                showCursor={false}
            />
        </div>
    )
}

export default Loading