import React from 'react';
import { FiFilter } from 'react-icons/fi';
import { HeaderWrapper, Search } from '../../components';

import styles from './Header.module.css';

const Header = props => {
    const { scrollY } = props;
    return (
        <HeaderWrapper scrollY={scrollY}>
            <h2 className={`${styles.headerContentTitle} text-neutral-white`}>Bring Deine Skills aufs nächste Level</h2>
            <h4 className={`${styles.headerContentSubTitle} text-neutral-white`}>Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.</h4>
            <Search />   
        </HeaderWrapper>
    )
}

export default Header;