import React from 'react';

import { Error, Loading, LoadingIndicator, ProjectCard } from '../../components';
import theme from '../../resources/theme/theme';
import styles from './Events.module.css';

const Events = props => {
    const { events, skills } = props; 
    const {loading, data, error} = skills;

    console.log(error)

    if (error) {
      return (
        <section className={`${styles.mainWrapper} bg-neutral-white`}>
          <Error />
        </section>
      )
    }

    if (loading) {
      return (
        <section className={`${styles.mainWrapper} bg-neutral-white`}>
            <Loading />
        </section>
      )
    }

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