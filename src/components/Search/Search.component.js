import React from 'react';
import { FiChevronRight, FiSearch } from 'react-icons/fi';

import styles from './Search.module.css';

const Search = props => {
    const { value, setValue } = props;

    return (
        <div className={`${styles.mainWrapper} bg-neutral-white`}>
            <div className={`${styles.contentWrapper} border-primary-orange hover:border-primary-lila`}>
                <FiSearch className={`${styles.searchInputIcon} text-primary-orange`} />
                <input
                    className={`${styles.inputField} text-primary-orange hover:text-primary-lila`}
                    placeholder={'Strategie, Digitalisierung, Projektmanagemnt..'}
                    value={value}
                    onChange={setValue}
                />
                <FiChevronRight className={`${styles.searchButtonIcon} text-primary-orange block md:hidden`} />
            </div>
            <button className={`${styles.searchButton} from-secondary-pink to-secondary-yellow`}>
                <FiChevronRight className={`${styles.searchButtonIcon} text-neutral-white`} />
            </button>
        </div>
    )
}

export default Search;