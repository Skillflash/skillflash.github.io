import React from 'react';
import { IoAddCircleOutline, IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { avatar14 } from '../../resources/Images';

import styles from './Cards.module.css';

const ProjectCard = props => {
    const { event } = props;

    return (
        <div className={`${styles.EventWrapper}`}>
            <div className={`${styles.projectBackgroundImageWrapper}`}>
                <img src={`https://50fx80xt.directus.com/assets/3bbe1720-f899-4d82-976e-c01743dac646`} alt={event.Name} className={`${styles.projectBackgroundImage}`} />
                <div className={`${styles.projectBackgroundGradient}`}>
                    <NavLink to={`/project/${event.Name}`} className={`${styles.projectNameWrapper} bg-neutral-black`}>
                        <p className={`${styles.projectName} text-neutral-white`}>{event.Name}</p>
                    </NavLink>
                    <p className={`${styles.EventDescription} text-neutral-black`}>{event?.Description.substring(0, 55)} {event?.Description.length > 55 && '...'}</p>
                    <p className={`${styles.EventLink} from-primary-blue to-primary-lila decoration-primary-blue`}> Mehr anseigen </p>
                </div>
            </div>
            <div className={`${styles.SkillsArea}`}>
                {event.Expert && event.Expert.Skills.length >=1 && event.Expert.Skills.map((skill, index) =>
                    <button key={index} className={`${styles.skillButton} bg-neutral-white border-neutral-black hover:bg-neutral-grey-light`}>
                        <p className={`${styles.skillButtonText} text-neutral-black`}>{skill.Skillname}</p>
                    </button>
                )}
                {/* <button className={`${styles.skillButton} bg-neutral-white border-neutral-black hover:bg-neutral-grey-light`}>
                        <p className={`${styles.skillButtonText} text-neutral-black`}>{event.Expert.Skill}</p>
                    </button> */}
                <p className={`${styles.SkillsNumber} text-neutral-black`}>24..</p>
            </div>
            <div className={`${styles.cardFloatButtonsWrapper}`}>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoAddCircleOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoShareSocialOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoHeartOutline className={`${styles.cardFloatButtonIcon} text-secondary-pink`} /></button>
            </div>
        </div>
    )
}

export default ProjectCard;