import React from 'react';
import { ExpertCard1, EventCard1,TeamCard, AudioCard1, ArticleCard1, CTACard, ProjectCard } from '../../components';

import styles from './Events.module.css';
import projects from '../../dummy/projects'

const Events = props => {
    return (
        <section className={`${styles.mainWrapper} bg-neutral-white`}>
            {/* <h3 className={`${styles.eventsTitle} text-transparent from-primary-blue to-primary-lila`}>Events, Expert:innen, Fachartikel und mehr..</h3> */}
            <div className={`${styles.eventsCards}`}>
                <ExpertCard1 />
                <EventCard1 />
                <AudioCard1 />
                <TeamCard />
                <ArticleCard1 />
                {projects.map((project, index) => <ProjectCard project={project} />)}
                {/* <div>
                    <CTACard />
                    <EventCard />
                    <ArticleCard />
                    <AudioCard />
                </div>
                <div>
                    <ArticleCard />
                    <ExpertCard />
                    <AudioCard />
                    <EventCard />
                </div>
                <div>
                    <ExpertCard />
                    <EventCard />
                    <ArticleCard />
                </div>
                <div>
                    <AudioCard />
                    <ArticleCard />
                    <ExpertCard />
                </div> */}
            </div>
        </section>
    )
}

export default Events;