import React from 'react';

import { BottomBar, TopNavBar } from '../../components';
import { EnterpriseHeader, About, EnterpriseFooter, Function } from '../../sections';

import style from './Enterprise.module.css';


const Enterprise = props => {
    const { scrollY } = props;

    return (
        <section>
            <TopNavBar scrollY={scrollY} />
            <EnterpriseHeader  scrollY={scrollY} />
            <About/>
            {/* <Projects /> */}
            {/* <Function />
            <EnterpriseFooter /> */}
            <BottomBar />
        </section>


    )
}

export default Enterprise;