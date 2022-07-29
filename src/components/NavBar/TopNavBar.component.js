import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiMenu } from 'react-icons/fi';
import { IoChevronForward, IoClose, IoPersonCircle, IoSearch } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const TopNavBar = props => {
    const { scrollY, styling } = props;

    const [isProfile, setIsProfile] = useState(false);
    const [text, setText] = useState('Skills finden...')

    return (
        <div className={`${styles.mainWrapper} ${scrollY >= 130 ? 'bg-neutral-white shadow-md' : 'bg-transparent'} ${styling}`}>
            <div className={`${styles.subWrapper}`}>
                <NavLink to='/' className={`${styles.logoTitle} ${scrollY >= 130 ? 'text-primary-lila' : 'text-neutral-white'}`}>Skillflash</NavLink>
                <NavLink to='/' className={`${styles.navButtonMd} mx-10`}>
                    <FiChevronRight className={`${styles.navButtonIcon} ${scrollY >= 130 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                    <h6 className={`${styles.expertCTA} ${scrollY >= 130 ? 'from-secondary-pink to-secondary-yellow' : 'from-neutral-white to-neutral-white'} font-bold `}>Expert:in werden</h6>
                </NavLink>
                <NavLink to='/enterprise' className={`${styles.navButtonMd}`}>
                    <FiChevronRight className={`${styles.navButtonIcon} ${scrollY >= 130 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                    <h6 className={`${styles.expertCTA} ${scrollY >= 130 ? 'from-secondary-pink to-secondary-yellow' : 'from-neutral-white to-neutral-white'} font-bold `}>Enterprise</h6>
                </NavLink>
                <div className={`${styles.searchWrapper} ${scrollY >= 130 ? 'bg-neutral-white' : 'bg-transparent'}`}>
                    <IoSearch  className={`${styles.searchIcon} ${scrollY >= 130 ? 'text-primary-orange' : 'text-neutral-white'} `} />
                    <input className={`${styles.searchField} ${scrollY >= 130 ? 'text-neutral-black' : 'text-neutral-white'} `} value={text} onChange={e => setText(e.target.value)} />
                    <button className={`${styles.searchButton} ${scrollY >= 130 ? 'text-neutral-white from-secondary-pink to-secondary-yellow' : 'text-neutral-white from-transparent to-transparent'}`} >
                        <IoChevronForward />
                    </button>
                </div>
                <div className={`${styles.navProfile}`}>
                    <button className={`${styles.profileNavWrapper} ${scrollY >= 130 ? 'bg-neutral-white' : 'bg-transparent'}`}  onClick={() => setIsProfile(!isProfile)}>
                        <FiMenu className={`${scrollY >= 130 ? 'mx-1 text-2xl text-primary-orange' : 'mx-1 text-2xl text-neutral-white'}`} />
                        <IoPersonCircle className={`${scrollY >= 130 ? 'mx-1 text-2xl text-primary-orange' : 'mx-1 text-2xl text-neutral-white'}`} />
                    </button>
                    <div className={`${styles.navProfileMenu} bg-neutral-white ${isProfile ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <button onClick={() => setIsProfile(!isProfile)} className={`${styles.closeButton} text-neutral-white from-secondary-pink to-secondary-yellow`}><IoClose /></button>
                        <NavLink to='/' className={`${styles.navButton} my-2`}>
                            <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                            <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow font-bold`}>Registrieren</h6>
                        </NavLink>
                        <NavLink to='/' className={`${styles.navButton} my-2`}>
                            <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                            <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow font-semibold`}>Anmelden</h6>
                        </NavLink>
                        <div className={`${styles.divider} border-primary-orange`} />
                        <NavLink to='/' className={`${styles.navButton} my-2`}>
                            <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                            <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow font-semibold`}>Expert:in werden</h6>
                        </NavLink>
                        <NavLink to='/enterprise' className={`${styles.navButton} my-2`}>
                            <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                            <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow font-semibold`}>Enterprise</h6>
                        </NavLink>
                        <NavLink to='/' className={`${styles.navButton} my-2`}>
                            <FiChevronRight className={`${styles.navButtonIcon} text-primary-orange`} />
                            <h6 className={`${styles.expertCTA} from-secondary-pink to-secondary-yellow font-semibold`}>Hilfe?</h6>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar;