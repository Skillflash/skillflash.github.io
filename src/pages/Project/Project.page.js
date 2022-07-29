import React from 'react';

import { TopNavBar } from '../../components';
import { ProjectHeader, Projects } from '../../sections';

const Project = props => {
    const { scrollY } = props

    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <ProjectHeader scrollY={scrollY} />
            <Projects />
        </section>
    )
}

export default Project;
