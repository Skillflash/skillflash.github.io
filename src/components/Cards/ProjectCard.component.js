import React from 'react';
import { IoAddCircleOutline, IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { avatar7 } from '../../resources/Images';
import Skills from '../Skills/Skills.component';

import styles from './Cards.module.css';


const ProjectCard = props => {
    const { project } = props;

    return (
        <div className={`${styles.EventWrapper}`}>
            <div className={`${styles.projectBackgroundImageWrapper}`}>
                <img src={project.image} alt={project.name} className={`${styles.projectBackgroundImage}`} />
                <div className={`${styles.projectBackgroundGradient}`}>
                    <NavLink to={`/project/${project.name}`} className={`${styles.projectNameWrapper} bg-neutral-black`}>
                        <p className={`${styles.projectName} text-neutral-white`}>{project.name}</p>
                    </NavLink>
                    <p className={`${styles.EventDescription} text-neutral-black`}>Lörem ipsum anar epipp som doskapet, kontradade mivårade..</p>
                    <p className={`${styles.EventLink} from-primary-blue to-primary-lila decoration-primary-blue`}> Mehr anseigen </p>
                </div>
            </div>
            <div className={`${styles.SkillsArea}`}>
                {project.skills.map((skill, index) =>
                    <button key={index} className={`${styles.skillButton} bg-neutral-white border-neutral-black hover:bg-neutral-grey-light`}>
                        <p className={`${styles.skillButtonText} text-neutral-black`}>{skill}</p>
                    </button>
                )}
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