import React from 'react';

import styles from './Events.module.css';

const EventDetails = props => {
    const { event } = props;
    console.log(event);
    return (
      <section className={`${styles.eventDetailsWrapper}`}>
        <div className={`${styles.eventSpace}`} />
        <div className={`${styles.eventDetailTextWrapper} text-neutral-black`}>
          <h4 className={`${styles.eventDetailTextTitle}`}>
            {event.data && event.data[0].name}
          </h4>
          <p className={`${styles.eventDetailTextText}`}>
            {event.data && event.data[0].description}
          </p>
          <p className={`${styles.eventDetailTextText}`}>
            Labore enim esse occaecat excepteur minim Lorem est nisi fugiat ea.
            Incididunt cillum et ipsum amet esse est cillum amet aliquip
            incididunt aliqua. Veniam dolore irure pariatur et cillum ea ex
            culpa nisi irure in velit ex mollit. Enim in mollit ipsum ea nostrud
            nulla. Irure do commodo consequat velit veniam est commodo. Duis
            voluptate irure dolore in et culpa.
          </p>
        </div>
      </section>
    );
}

export default EventDetails;