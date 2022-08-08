import React from 'react';

import { TopNavBar } from '../../components';
import { useGetSkills, useGetTeams, useGetSubskill } from '../../hooks';
import { ProjectHeader, Projects } from '../../sections';

const Project = props => {
    const { scrollY } = props;

    let skills = useGetSkills();
    let teams = useGetTeams();
    let subskill = useGetSubskill();
    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <ProjectHeader scrollY={scrollY} projectSkills={subskill} />
            {/* <ProjectHeader scrollY={scrollY} projectSubskill={subskill} /> */}
            {/* <Projects teams={teams} /> */}
        </section>
    )
}

export default Project;
