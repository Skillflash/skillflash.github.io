import React, { useState } from 'react';
import { HeaderWrapper, Search } from '../../components';

import styles from './Header.module.css';

const Header = props => {
    const { scrollY } = props;

    const [text, setText] = useState('Skills für den Erfolg finden..');
    
    return (
        <HeaderWrapper scrollY={scrollY}>
            <h2 className={`${styles.headerContentTitle} text-neutral-white`}>Expert:innen, Events und diverse Skills</h2>
            <h4 className={`${styles.headerContentSubTitle} text-neutral-white`}>Wir vermitteln fundierte Skills für Dich und Dein Team durch diverse Formate und professionelle Expert:innen.</h4>
            <Search value={text} setValue={e => setText(e.target.value)} />  
        </HeaderWrapper>
    )
}

export default Header;