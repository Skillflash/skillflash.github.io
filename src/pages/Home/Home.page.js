import React from 'react';

import {Search, TopNavBar} from '../../components';
import { Events, Header } from '../../sections';
import styles from './Home.module.css'

const Home = props => {
    const { scrollY } = props;

    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <Header scrollY={scrollY} />
            <Events />
        </section>
    )
}

export default Home;