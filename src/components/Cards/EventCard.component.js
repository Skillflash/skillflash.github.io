import React from 'react';
import { IoAddCircleOutline, IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';

import styles from './Cards.module.css';
import Skills from '../Skills/Skills.component';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';


const EventCard = props => {
    const {event} = props;
    
    return (
        <div className={`${styles.EventWrapper}`}>
            <div className={`${styles.EventBackgroundImageWrapper}`}>
                <img src={`${process.env.REACT_APP_SECRET_DIRECTUS_LINK}assets/${event.eventImage.id}${process.env.REACT_APP_IMAGE_EXTENSIONS}`} alt={'project.name'} className={`${styles.projectBackgroundImage}`} />
                <div className={`${styles.EventBackgroundGradient}`}>
                    <div>
                        <img src={`${process.env.REACT_APP_SECRET_DIRECTUS_LINK}assets/${event.author && event.author.profileImage.id}${process.env.REACT_APP_IMAGE_EXTENSIONS}`} alt='avatar 7' className='w-14 h-14 rounded-full border-2 border-white shadow-2xl'/>
                    </div>
                    <div className={`${styles.EventDateArea} bg-neutral-black`}>
                        <Moment className={`${styles.EventDate} text-neutral-white`} format="D MMM" withTitle>
                            {event && event.startDate}
                        </Moment>
                    </div>
                    <p className={`${styles.EventTitle} text-neutral-black`}>{event.name}</p>
                    <p className={`${styles.EventDescription} text-neutral-black`}>
                        {event?.description.substring(0, 55)}{" "}
                        {event?.description.length > 55 && "..."}
                    </p>
                    <Link to={`/event/${event.name}`} className={`${styles.EventLink} from-primary-blue to-primary-lila decoration-primary-blue`}>Mehr anseigen</Link>
                </div>
            </div>
            <div className={`${styles.SkillsArea}`}>
                {event.skills &&
                    event.skills.length >= 1 &&
                    event.skills.slice(0, 2).map((subskill, index) => (
                        <Skills text={`${subskill.MainSkills_id && subskill.MainSkills_id.skillName.substring(0, 8)}${subskill.MainSkills_id && subskill.MainSkills_id.skillName.length >= 9 ? '...' : ''}`} color={'lila'}/>
                ))}
                {event.skills.length > 2 && <p className={`${styles.SkillsNumber} text-primary-lila`}>{event.skills.length - 2}...</p>}
            </div>
            <div className={`${styles.cardFloatButtonsWrapper}`}>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoAddCircleOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoShareSocialOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoHeartOutline className={`${styles.cardFloatButtonIcon} text-secondary-pink`} /></button>
            </div>
        </div>
    )
}

export default EventCard;