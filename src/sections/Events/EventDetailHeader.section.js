import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import styles from './Events.module.css';
import { EventDetailsCard, EventWrapper } from '../../components';
import { avatar12, avatar13, avatar16, avatar17 } from '../../resources/Images';

const EventDetailHeader = props => {
    const { scrollY } = props;

    return (
        <EventWrapper styling=''>
            <div className={styles.projectBackWrapper}>
                <Link to='/' className={`${styles.projectBack} ${scrollY >= 200 ? 'border-primary-orange' : 'border-neutral-white'}`}>
                    <IoArrowBack className={`${styles.projectBackIcon} ${scrollY >= 200 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                </Link>
            </div>
            <div className={`${styles.eventDetails}`}>
                <EventDetailsCard />
                <div className={`${styles.eventAuthor}`}>
                    <div className={`${styles.eventAuthorDetails}`}>
                        <img src={avatar13} alt='Author' className={`${styles.eventAuthorImage} border-neutral-white`} />
                        <h4 className={`${styles.eventAuthorName} text-neutral-white`}>Paul Mertens</h4>
                        <p className={`${styles.eventAuthorText} text-neutral-white`}>..organsiert dieses Event.</p>
                    </div>
                </div>
            </div>
        </EventWrapper>
    )
}

export default EventDetailHeader;