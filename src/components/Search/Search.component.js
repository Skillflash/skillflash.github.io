import React from 'react';
import { FiChevronRight, FiSearch } from 'react-icons/fi';

import styles from './Search.module.css';

const Search = props => {
    return (
        <div className={`${styles.mainWrapper} bg-neutral-white`}>
            <div className={`${styles.contentWrapper} border-primary-orange`}>
                <FiSearch className={`${styles.searchInputIcon} text-primary-orange`} />
                <input className={`${styles.inputField} text-primary-lila`} placeholder={'Strategie, Digitalisierung, Projektmanagemnt..'} value={'Strategie, Digitalisierung, Projektmanagemnt..'} />
            </div>
            <button className={`${styles.searchButton} bg-primary-orange`}>
                <FiChevronRight className={`${styles.searchButtonIcon} text-neutral-white`} />
            </button>
        </div>
    )
}

export default Search;