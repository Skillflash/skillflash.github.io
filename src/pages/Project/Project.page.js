import React from 'react';
import { BottomBar, TopNavBar } from '../../components';
import { Events, ProjectHeader, Projects } from '../../sections';

import style from './Project.module.css';

const Project = props => {
    const {scrollY} = props

    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <ProjectHeader scrollY={scrollY} />
            <Projects />
            <BottomBar />
        </section>
    )
}

export default Project;