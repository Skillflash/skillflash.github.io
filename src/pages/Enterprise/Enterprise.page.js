import React from 'react';

import { BottomBar, MobileNav, TopNavBar } from '../../components';
import { EnterpriseHeader, About, EnterpriseFooter, Function, AboutDash } from '../../sections';

import style from './Enterprise.module.css';


const Enterprise = props => {
    const { scrollY } = props;

    return (
        <section>
            <TopNavBar scrollY={scrollY} />
            <EnterpriseHeader  scrollY={scrollY} />
            <About />
            <AboutDash />
            <Function />
            <EnterpriseFooter /> 
        </section>


    )
}

export default Enterprise;