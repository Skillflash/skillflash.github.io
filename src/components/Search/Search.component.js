import React from 'react';
import { chevron_down, search } from '../../resources/Icons';

import styles from './Search.module.css';

const Search = props => {
    return (
        <div className={`${styles.mainWrapper} bg-neutral-white`}>
            <div className={`${styles.contentWrapper} border-neutral-grey`}>
                <input className={`${styles.inputField} text-neutral-grey`} placeholder={'Thema'} />
                <div className={`${styles.dropDownButtonWrapper}  border-neutral-grey`}>
                    <button className={`${styles.dropDownButton}`}>
                        <div>
                            <p>Auswählen</p>
                        </div>
                        <img alt="icon" src={chevron_down} />
                    </button>
                </div>
            </div>
            <button className={`${styles.searchButton} bg-primary-orange`}>
                <img alt="icon" src={search} />
            </button>
        </div>
    )
}

export default Search;