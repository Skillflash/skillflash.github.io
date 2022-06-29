import React from 'react';
import { ArticleCard, ExpertCard, AudioCard, EventCard, CTACard, ExpertCard1, EventCard1,TeamCard } from '../../components';

import styles from './Events.module.css';

const Events = props => {
    return (
        <section className={`${styles.mainWrapper} bg-neutral-white`}>
            <h3 className={`${styles.eventsTitle} text-transparent from-primary-blue to-primary-lila`}>Events, Expert:innen, Fachartikel und mehr..</h3>
            <div className={`${styles.eventsCards}`}>
                <div>
                    <ExpertCard1 />
                </div>
                <div>
                    <EventCard1 />
                </div>
                <div>
                    <TeamCard/>
                </div>
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