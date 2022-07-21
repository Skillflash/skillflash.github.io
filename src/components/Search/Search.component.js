import React from 'react';
import { IoChevronForward, IoSearch } from 'react-icons/io5';

import styles from './Search.module.css';

const Search = props => {
    const { value, setValue } = props;

    return (
        <div className={`${styles.mainWrapper} bg-neutral-white`}>
            <div className={`${styles.contentWrapper} border-primary-orange hover:border-primary-lila`}>
                <IoSearch className={`${styles.searchInputIcon} text-secondary-pink`} />
                <input
                    className={`${styles.inputField} text-neutral-black hover:text-primary-lila`}
                    placeholder={'Strategie, Digitalisierung, Projektmanagemnt..'}
                    value={value}
                    onChange={setValue}
                />
            </div>
            <button className={`${styles.searchButton} from-secondary-pink to-secondary-yellow`}>
                <IoChevronForward className={`${styles.searchButtonIcon} text-neutral-white`} />
            </button>
        </div>
    )
}

export default Search;