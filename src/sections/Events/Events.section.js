import React from 'react';

import { LoadingIndicator, ProjectCard } from '../../components';
import theme from '../../resources/theme/theme';
import styles from './Events.module.css';

const Events = props => {
    const { events } = props; 
    return (
        <section className={`${styles.mainWrapper} bg-neutral-white`}>
            {events.loading ?
                <div className='mt-20'>
                    <LoadingIndicator size={2} color={theme.SECONDARY_PINK} />
                </div>
             :
                <div className={`${styles.eventsCards}`}>
                {events.data.map((event, index) => <ProjectCard event={event} key={index} />)}
            </div>
            }
        </section>
    )
}

export default Events;