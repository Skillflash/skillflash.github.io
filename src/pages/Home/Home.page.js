import React, { useEffect, useState } from 'react';

import {Search, TopNavBar} from '../../components';
import { Events, Header } from '../../sections';
import styles from './Home.module.css'

const Home = props => {
    const [scrollY, setScrollY] = useState(0);

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
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <Header scrollY={scrollY} />
            <Events />
        </section>
    )
}

export default Home;