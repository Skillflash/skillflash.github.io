import React from 'react';

import { BottomBar, TopNavBar } from '../../components';
import { Events, ProjectHeader, Projects } from '../../sections';

import style from './Enterprise.module.css';

const Enterprise = props => {
    const {scrollY} = props

    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <ProjectHeader scrollY={scrollY} />
            {/* <Projects /> */}
            {/* <BottomBar /> */}
            <h1>hello pegfdbvbvcvccv c</h1>
        </section>
    )
}

export default Enterprise;