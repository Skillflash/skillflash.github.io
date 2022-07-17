import React from 'react';
import { ExpertCard1, EventCard1,TeamCard, AudioCard1, ArticleCard1, CTACard, ProjectCard } from '../../components';

import styles from './Events.module.css';
import projects from '../../dummy/projects'

const Events = props => {
    return (
        <section className={`${styles.mainWrapper} bg-neutral-white`}>
            <div className={`${styles.eventsCards}`}>
                {projects.map((project, index) => <ProjectCard project={project} key={index} />)}
            </div>
        </section>
    )
}

export default Events;