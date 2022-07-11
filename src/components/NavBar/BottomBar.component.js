import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoHeartOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const BottomBar = props => {

    return (
        <nav className={`${styles.bottomWrapper} bg-neutral-white`}>
            <NavLink
                to='/'
                className={({isActive}) => isActive ? `${styles.bottomLink} ${textGradient} ${activeLink}` : `${styles.bottomLink} ${textGradient}`}
            >

                <FiSearch className={`${styles.bottomLinkIcon} text-primary-orange`} />
                <h6 className={`${styles.bottomLinkText}`}>Skills</h6>
            </NavLink>
            <NavLink
                to='/project'
                className={({isActive}) => isActive ? `${styles.bottomLink} ${textGradient} ${activeLink}` : `${styles.bottomLink} ${textGradient}`}
            >
                <IoHeartOutline className={`${styles.bottomLinkIcon} text-primary-orange`} />
                <h6 className={`${styles.bottomLinkText}`}>Wunschliste</h6>
            </NavLink>
            <NavLink
                to='/project'
                className={({isActive}) => isActive ? `${styles.bottomLink} ${textGradient} ${activeLink}` : `${styles.bottomLink} ${textGradient}`}
            >
                <IoPersonCircleOutline className={`${styles.bottomLinkIcon} text-primary-orange`} />
                <h6 className={`${styles.bottomLinkText}`}>Anmelden</h6>
            </NavLink>
        </nav>
    )
}

export default BottomBar;

const textGradient = 'from-primary-lila via-primary-orange to-secondary-yellow'
const activeLink = 'border-b-2 border-b-primary-orange'