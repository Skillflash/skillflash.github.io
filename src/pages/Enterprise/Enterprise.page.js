import React from 'react';
import { Function } from '../../sections'
import { EnterpriseFooter } from '../../sections';

import { BottomBar, TopNavBar } from '../../components';
import { EnterpriseHeader, About } from '../../sections';

import style from './Enterprise.module.css';


const Enterprise = props => {
    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <EnterpriseHeader  scrollY={scrollY} />
            <About/>
            {/* <Projects /> */}
             <Function />
            <EnterpriseFooter />
            <BottomBar />
        </section>


    )
}

export default Enterprise;