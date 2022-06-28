import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiMenu } from 'react-icons/fi';
import { IoPersonCircle } from 'react-icons/io5';

import styles from './NavBar.module.css';

const TopNavBar = props => {
    const [scrollY, setScrollY] = useState(0);
    console.log(scrollY)

    const logit = () => {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    }, [scrollY]);

    return (
        <div className={`${styles.mainWrapper} ${scrollY >= 140 ? 'bg-neutral-white shadow-md' : 'bg-transparent'}`}>
            <h3 className={`${styles.logoTitle} ${scrollY >= 140 ? 'text-primary-lila' : 'text-neutral-white'}`}>skillflash</h3>
            <button className={`${styles.navButton}`}>
                <FiChevronRight className={`${styles.navButtonIcon} ${scrollY >= 140 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                <h2 className={`${styles.expertCTA} ${scrollY >= 140 ? 'from-secondary-pink via-secondary-pink to-primary-orange' : 'from-neutral-white to-neutral-white'}`}>Expert:in werden</h2>
            </button>
            <button className={`${styles.navButton}`}>
                <FiChevronRight className={`${styles.navButtonIcon} ${scrollY >= 140 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                <h2 className={`${styles.expertCTA} ${scrollY >= 140 ? 'from-secondary-pink via-secondary-pink to-primary-orange' : 'from-neutral-white to-neutral-white'}`}>Enterprise</h2>
            </button>
            <button className={`${styles.profileNavWrapper} ${scrollY >= 140 ? 'bg-neutral-white' : 'bg-transparent'}`}>
                <FiMenu className={`${scrollY >= 140 ? 'mx-1 text-2xl text-primary-orange' : 'mx-1 text-2xl text-neutral-white'}`} />
                <IoPersonCircle className={`${scrollY >= 140 ? 'mx-1 text-2xl text-primary-orange' : 'mx-1 text-2xl text-neutral-white'}`} />
            </button>
        </div>
    )
}

export default TopNavBar;