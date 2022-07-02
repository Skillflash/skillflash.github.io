import React, { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { ArticleCard1, AudioCard1, EventCard1, ExpertCard1, TeamCard } from '../../components';

import styles from './Projects.module.css'

const Projects = props => {
    const [filters, setFilters] = useState([]);
    const _filters = [
        { name: 'Expert:inn', value: 'expert:inn', color:'bg-primary-blue' },
        { name: 'Events', value: 'events', color:'bg-primary-lila' },
        { name: 'Artikel', value: 'artikel', color:'bg-primary-orange' },
        { name: 'Audio/Video', value: 'audio/video', color:'bg-secondary-rosa' },
        { name: 'Teams', value: 'temas', color:'bg-secondary-pink' },
    ]
    return (
        <section className={`${styles.mainWrapper} bg-neutral-white`}>
            <div className={`${styles.skillsButtonFilters}`}>
                {_filters.map((filter, index) => 
                    <button className={`text-neutral-white ${styles.skillsButton} ${filter.color}`}>
                        <h6 className={`${styles.skillsButtonText}`}>{filter.name}</h6>
                        <IoCloseCircle className={`${styles.skillsButtonIcon}`} />
                    </button>
                )}
            </div>
            <div className={`${styles.skillsCards}`}>
                <ExpertCard1 />
                <EventCard1 />
                <AudioCard1 />
                <TeamCard />
                <ArticleCard1 />
                <EventCard1 />
                <AudioCard1 />
                <TeamCard />
            </div>
        </section>
    )
}

export default Projects;