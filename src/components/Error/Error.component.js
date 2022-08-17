import React from 'react';
import theme from '../../resources/theme/theme';

import styles from './Error.module.css';

const Error = props => {
    return (
        <div className={`${styles.mainWrapper}`}>
            <div className={`${styles.content}`}>
                <h2 style={{webkitTextStroke: `0.5px ${theme.PRIMARY_ORANGE}`}}>404 error</h2>
                <h2 className={`${styles.title} from-secondary-pink to-secondary-yellow`}>404 error</h2>
            </div>
            <h4 className={`${styles.subTitle} from-secondary-pink to-secondary-yellow`}>Sorry, try again later.</h4>
        </div>
    )
}

export default Error;