import React from 'react';

import {BottomBar, Search, TopNavBar} from '../../components';
import { useGetEvents, useGetSkills } from '../../hooks';
import { Events, Header } from '../../sections';
import styles from './Home.module.css'

const Home = props => {
    const { scrollY } = props;
    let events = useGetEvents();
    let skills = useGetSkills();
    
    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <Header scrollY={scrollY} />
            <Events events={events} skills={skills} />
        </section>
    )
}

export default Home;