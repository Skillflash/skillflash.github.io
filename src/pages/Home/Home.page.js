import React from 'react';

import {TopNavBar} from '../../components';
import { Events, Header } from '../../sections';
import styles from './Home.module.css'

const Home = props => {
    return (
        <section>
            <TopNavBar />
            <Header />
            <Events />
        </section>
    )
}

export default Home;