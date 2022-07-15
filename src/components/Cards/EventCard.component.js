import React from 'react';
import { IoAddCircleOutline, IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';

import styles from './Cards.module.css';
import { avatar7, project } from '../../resources/Images';
import Skills from '../Skills/Skills.component';

const EventCard = props => {
    return (
        <div className={`${styles.EventWrapper}`}>
            <div className={`${styles.EventBackgroundImageWrapper}`}>
                <img src={project} alt={'project.name'} className={`${styles.projectBackgroundImage}`} />
                <div className={`${styles.EventBackgroundGradient}`}>
                    <div>
                        <img src= {avatar7} alt='avatar 7' className='w-14 h-14 rounded-full border-2 border-white shadow-2xl'/>
                    </div>
                    <div className={`${styles.EventDateArea} bg-neutral-black`}>
                        <p className={`${styles.EventDate} text-neutral-white`}>12. Mai</p>
                    </div>
                    <p className={`${styles.EventTitle} text-neutral-black`}>Event Titel</p>
                    <p className={`${styles.EventDescription} text-neutral-black`}>Lörem ipsum anar epipp som doskapet, kontradade mivårade..</p>
                    <p className={`${styles.EventLink} from-primary-blue to-primary-lila decoration-primary-blue`}> Mehr anseigen </p>
                </div>
            </div>
            <div className={`${styles.SkillsArea}`}>
                <Skills text={'Subskill'} color={'lila'}/>
                <Skills text={'Subskill'} color={'lila'}/>
                <p className={`${styles.SkillsNumber} text-primary-lila`}>24..</p>
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