import React from 'react';
import { MdLocationPin, MdOutlineBookmarkAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from './Cards.module.css';
import { event } from '../../resources/Images';
import EventButton from '../Buttons/EventButton.component';
import { IoFilmOutline } from 'react-icons/io5';

const EventDetailsCard = props => {
    return (
        <div className={`${styles.eventCard} bg-neutral-white`}>
            <div className={`${styles.eventCardImageWrapper}`}>
                <img src={event} alt='event' className={`${styles.eventCardImager}`} />
                <button className={`${styles.eventCardBook} text-secondary-pink bg-neutral-white`}><MdOutlineBookmarkAdd /></button>
            </div>
            <div className='p-5'>
                <h6 className={`${styles.eventTitle} from-secondary-pink to-secondary-yellow`}>Speaking about Transformation</h6>
                <div className={`${styles.EventDateArea} bg-neutral-black`}>
                    <p className={`${styles.EventDate} text-neutral-white`}>12. Mai</p>
                </div>
                <div className='my-5 border border-neutral-grey'/>
                <div className={`${styles.eventSkills}`}>
                    <Link to={`/project`} className={`${styles.eventSkillWrapper} bg-neutral-black`}>
                        <p className={`${styles.eventSkill} text-neutral-white`}>Transformation</p>
                    </Link>
                    <Link to={`/project`} className={`${styles.eventSkillWrapper} bg-neutral-black`}>
                        <p className={`${styles.eventSkill} text-neutral-white`}>VUKA</p>
                    </Link>
                    <Link to={`/project`} className={`${styles.eventSkillWrapper} bg-neutral-black`}>
                        <p className={`${styles.eventSkill} text-neutral-white`}>Digital</p>
                    </Link>
                </div>
                <div className = {`${styles.eventZoom} self-start text-neutral-black`}>
                    <MdLocationPin size = {16} className='mr-1 text-2xl text-neutral-black' /> 
                    <p className={`${styles.eventZoomText}`}>Zoom</p>
                </div>
                <div>
                    <p className={`${styles.eventPriceRange} text-neutral-black`}>42,50€  -  45,30€</p>
                </div>
                <EventButton>
                    <p className={`${styles.buttonText} text-neutral-white`}>Tickets buchen</p>
                    <IoFilmOutline className={`${styles.buttonIcon} text-neutral-white`} />
                </EventButton>
            </div>
        </div>
    )
}

export default EventDetailsCard;