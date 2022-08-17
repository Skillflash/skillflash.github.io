import React from 'react';
import { Error, Loading, LoadingIndicator } from '../../components';
import theme from '../../resources/theme/theme';

import styles from './Events.module.css';

const EventDetails = props => {
    const { event } = props;
    const {loading, data, error} = event;

    if (error) {
      return (
        <section className={`${styles.mainWrapper} bg-neutral-white pt-40`}>
          <Error />
        </section>
      )
    }
  
    if (loading) {
      return (
        <section className={`${styles.mainWrapper} bg-neutral-white pt-40`}>
            <Loading />
        </section>
      )
    }

    return (
      <section className={`${styles.eventDetailsWrapper}`}>
        <div className={`${styles.eventSpace}`} />
        {loading ? <LoadingIndicator color={theme.PRIMARY_BLUE} size={1.5} /> : data && <div className={`${styles.eventDetailTextWrapper} text-neutral-black`}>
          <h4 className={`${styles.eventDetailTextTitle}`}>
            {data && data.name}
          </h4>
          <p className={`${styles.eventDetailTextText}`}>
            {data && data.description}
          </p>
          {/* <p className={`${styles.eventDetailTextText}`}>
            Labore enim esse occaecat excepteur minim Lorem est nisi fugiat ea.
            Incididunt cillum et ipsum amet esse est cillum amet aliquip
            incididunt aliqua. Veniam dolore irure pariatur et cillum ea ex
            culpa nisi irure in velit ex mollit. Enim in mollit ipsum ea nostrud
            nulla. Irure do commodo consequat velit veniam est commodo. Duis
            voluptate irure dolore in et culpa.
          </p> */}
        </div>}
      </section>
    );
}

export default EventDetails;