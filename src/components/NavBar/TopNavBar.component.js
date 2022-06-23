import React from 'react';

import styles from './NavBar.module.css';
import { Search } from '..';
import { menu, profile } from '../../resources/Icons';

const TopNavBar = props => {
    return (
        <div className={`${styles.mainWrapper}`}>
            <h3 className={`${styles.logoTitle}`}>Logo</h3>
            <Search />
            <h2 className={`${styles.expertCTA}`}>Expert:in werden</h2>
            <div className={`${styles.profileNavWrapper} bg-primary-orange`}>
                <button className={`${styles.profileButton}`}>
                    <img alt="icon" src={menu} />
                </button>
                <button className={`${styles.profileButton}`}>
                    <img alt="icon" src={profile} />
                </button>
            </div>
        </div>
    )
}

export default TopNavBar;