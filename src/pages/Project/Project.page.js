import React from 'react';
import { useParams } from 'react-router-dom';

import { TopNavBar } from '../../components';
import { useGetSkills, useGetTeams, useGetSubskill, useGetSkill, useGetEvents, useGetFilterExperts } from '../../hooks';
import { ProjectHeader, Projects } from '../../sections';

const Project = props => {
    const { scrollY } = props;
    let {project} = useParams();

    let skills = useGetSkill(project);
    let events = useGetEvents(project);
    let experts = useGetFilterExperts(project);

    return (
        <section className='relative'>
            <TopNavBar scrollY={scrollY} />
            <ProjectHeader scrollY={scrollY} projectSkills={skills} />
            {/* <ProjectHeader scrollY={scrollY} projectSubskill={subskill} /> */}
            <Projects events={events} experts={experts} />
        </section>
    )
}

export default Project;
