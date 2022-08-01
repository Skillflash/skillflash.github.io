import React from 'react';

import styles from './Events.module.css';

const EventDetails = props => {
    return (
        <section className={`${styles.eventDetailsWrapper}`}>
            <div className={`${styles.eventSpace}`} />
            <div className={`${styles.eventDetailTextWrapper} text-neutral-black`}>
                <h4 className={`${styles.eventDetailTextTitle}`}>Zu diesem Event</h4>
                <p className={`${styles.eventDetailTextText}`}>Quis cupidatat consectetur velit amet minim minim dolor reprehenderit aute reprehenderit ullamco. Duis dolor officia duis id eiusmod culpa reprehenderit ea exercitation in ea quis. Aute labore duis occaecat quis do nisi et. Cupidatat ex eu do anim officia. Sunt veniam do proident dolore deserunt non aliquip enim et. Occaecat id fugiat sint elit elit id aute aute ipsum veniam ullamco ut. Proident ipsum minim deserunt fugiat nulla nisi aliqua elit dolor Lorem nulla.</p>
                <p className={`${styles.eventDetailTextText}`}>Labore enim esse occaecat excepteur minim Lorem est nisi fugiat ea. Incididunt cillum et ipsum amet esse est cillum amet aliquip incididunt aliqua. Veniam dolore irure pariatur et cillum ea ex culpa nisi irure in velit ex mollit. Enim in mollit ipsum ea nostrud nulla. Irure do commodo consequat velit veniam est commodo. Duis voluptate irure dolore in et culpa.</p>
            </div>
        </section>
    )
}

export default EventDetails;