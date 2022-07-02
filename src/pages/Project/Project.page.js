import React from 'react';
import { TopNavBar } from '../../components';
import { Events, ProjectHeader, Projects } from '../../sections';

import style from './Project.module.css';

const Project = props => {
    const {scrollY} = props

    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <ProjectHeader scrollY={scrollY} />
            <Projects />
        </section>
    )
}

export default Project;