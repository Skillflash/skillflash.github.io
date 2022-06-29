import React from 'react';

import {Search, TopNavBar} from '../../components';
import { Events, Header } from '../../sections';
import styles from './Home.module.css'

const Home = props => {
    return (
        <section className='relative'>
            <TopNavBar />
            <Header />
            <Events />
        </section>
    )
}

export default Home;