import React from 'react';

import { TopNavBar } from '../../components';
import { useGetSkills, useGetTeams } from '../../hooks';
import { ProjectHeader, Projects } from '../../sections';

const Project = props => {
    const { scrollY } = props;

    let skills = useGetSkills();
    let teams = useGetTeams();

    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <ProjectHeader scrollY={scrollY} projectSkills={skills} />
            <Projects teams={teams} />
        </section>
    )
}

export default Project;
