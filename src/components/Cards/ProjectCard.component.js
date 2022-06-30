import React from 'react';
import { IoAddCircleOutline, IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { avatar7 } from '../../resources/Images';
import Skills from '../Skills/Skills.component';

import styles from './Cards1.module.css';


const ProjectCard = props => {
    const { project } = props;

    return (
        <div className={`${styles.projectWrapper}`}>
            <div className={`${styles.projectBackgroundImageWrapper}`}>
                <img src={project.image} alt='imagesdf' className={`${styles.projectBackgroundImage}`} />
                <div className={`${styles.projectBackgroundGradient}`}>
                    <div className={`${styles.projectNameWrapper} bg-neutral-black`}>
                        <p className={`${styles.projectName} text-neutral-white`}>{project.name}</p>
                    </div>
                    <p className={`${styles.EventDescription} text-neutral-black`}>Lörem ipsum anar epipp som doskapet, kontradade mivårade..</p>
                    <p className={`${styles.EventLink} from-primary-blue to-primary-lila decoration-primary-blue`}> Mehr anseigen </p>
                </div>
            </div>
            <div className={`${styles.SkillsArea}`}>
                {/* <Skills text={'Subskill'} color={'primary-blue'}/>
                <Skills text={'Subskill'} color={'primary-blue'}/>
                <p className={`${styles.SkillsNumber} text-primary-blue`}>24..</p> */}
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