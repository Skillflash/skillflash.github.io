import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiMenu } from 'react-icons/fi';
import { IoPersonCircle } from 'react-icons/io5';

import styles from './NavBar.module.css';

const TopNavBar = props => {
    const { scrollY } = props;

    const [isProfile, setIsProfile] = useState(false);

    return (
        <div className={`${styles.mainWrapper} ${scrollY >= 140 ? 'bg-neutral-white shadow-md' : 'bg-transparent'}`}>
            <h3 className={`${styles.logoTitle} ${scrollY >= 140 ? 'text-primary-lila' : 'text-neutral-white'}`}>skillflash</h3>
            <button className={`${styles.navButton} mx-10`}>
                <FiChevronRight className={`${styles.navButtonIcon} ${scrollY >= 140 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                <h6 className={`${styles.expertCTA} ${scrollY >= 140 ? 'from-secondary-pink to-secondary-yellow' : 'from-neutral-white to-neutral-white'} font-bold `}>Expert:in werden</h6>
            </button>
            <button className={`${styles.navButton}`}>
                <FiChevronRight className={`${styles.navButtonIcon} ${scrollY >= 140 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                <h6 className={`${styles.expertCTA} ${scrollY >= 140 ? 'from-secondary-pink to-secondary-yellow' : 'from-neutral-white to-neutral-white'} font-bold `}>Enterprise</h6>
            </button>
            <div className={`${styles.navProfile}`}>
                <button className={`${styles.profileNavWrapper} ${scrollY >= 140 ? 'bg-neutral-white' : 'bg-transparent'}`}  onClick={() => setIsProfile(!isProfile)}>
                    <FiMenu className={`${scrollY >= 140 ? 'mx-1 text-2xl text-primary-orange' : 'mx-1 text-2xl text-neutral-white'}`} />
                    <IoPersonCircle className={`${scrollY >= 140 ? 'mx-1 text-2xl text-primary-orange' : 'mx-1 text-2xl text-neutral-white'}`} />
                </button>
                <div className={`${styles.navProfileMenu} bg-neutral-white ${isProfile ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <button className={`${styles.navButton} my-2`}>
                        <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                        <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow font-bold`}>Registrieren</h6>
                    </button>
                    <button className={`${styles.navButton} my-2`}>
                        <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                        <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow`}>Anmelden</h6>
                    </button>
                    <div className={`${styles.divider} border-primary-orange`} />
                    <button className={`${styles.navButton} my-2`}>
                        <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                        <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow`}>Expert:in werden</h6>
                    </button>
                    <button className={`${styles.navButton} my-2`}>
                        <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                        <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow`}>Enterprise</h6>
                    </button>
                    <button className={`${styles.navButton} my-2`}>
                        <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                        <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow`}>Hilfe?</h6>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar;