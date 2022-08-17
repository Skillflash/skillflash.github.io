import React from 'react';

import { LoadingIndicator, ProjectCard } from '../../components';
import theme from '../../resources/theme/theme';
import styles from './Events.module.css';

const Events = props => {
    const { events, skills } = props; 
    const {loading, data, error} = skills;
    return (
      <section className={`${styles.mainWrapper} bg-neutral-white`}>
        {loading ? (
          <div className="mt-20">
            <LoadingIndicator size={2} color={theme.SECONDARY_PINK} />
          </div>
        ) : (
          <div className={`${styles.eventsCards}`}>
            {data &&
              data.map((datum, index) => (
                <ProjectCard skill={datum} key={index} />
              ))}
          </div>
        )}
      </section>
    );
}

export default Events;