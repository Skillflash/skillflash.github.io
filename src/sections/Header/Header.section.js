import React, { useState } from 'react';
import { FiChevronRight, FiFilter, FiMenu } from 'react-icons/fi';
import { IoClose, IoPersonCircle } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, Search } from '../../components';

import styles from './Header.module.css';

const Header = props => {
    const { scrollY } = props;

    const [text, setText] = useState('Strategie, Digitalisierung, Projektmanagemnt..');
    const [isProfile, setIsProfile] = useState(false);
    
    return (
        <HeaderWrapper scrollY={scrollY}>
            <h2 className={`${styles.headerContentTitle} text-neutral-white`}>Bring Deine Skills aufs nächste Level</h2>
            <h4 className={`${styles.headerContentSubTitle} text-neutral-white`}>Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.</h4>
            <div className={`${styles.mobileWrapper} ${scrollY >= 130 && 'bg-neutral-white md:bg-transparent'}`}>
                <Search value={text} setValue={e => setText(e.target.value)} />  
                <div className={`${styles.navProfile}`}>
                    <button className={`${styles.profileNavWrapper} ${scrollY >= 130 ? 'bg-neutral-white' : 'bg-transparent'}`}  onClick={() => setIsProfile(!isProfile)}>
                        <FiMenu className={`${scrollY >= 130 ? 'h-[51px] mx-1 text-3xl text-primary-orange' : 'h-[51px] mx-1 text-3xl text-neutral-white'}`} />
                        <IoPersonCircle className={`${scrollY >= 130 ? 'h-[51px] mx-1 text-3xl text-primary-orange' : 'h-[51px] mx-1 text-3xl text-neutral-white'}`} />
                    </button>
                    <div className={`${styles.navProfileMenu} bg-neutral-white ${isProfile ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <button className={`${styles.closeButton} from-secondary-pink to-secondary-yellow`} onClick={() => setIsProfile(!isProfile)}>
                            <IoClose className='text-neutral-white text-lg' />
                        </button>
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
        </HeaderWrapper>
    )
}

export default Header;