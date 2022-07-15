import React from 'react';

import { BottomBar, TopNavBar } from '../../components';
import { EnterpriseHeader, About } from '../../sections';

import style from './Enterprise.module.css';

const Enterprise = props => {
    const {scrollY} = props

    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <EnterpriseHeader  scrollY={scrollY} />
            <About/>
            {/* <Projects /> */}
            <BottomBar />
        </section>
    )
}

export default Enterprise;