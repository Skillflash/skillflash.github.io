import React from 'react';
import Skills from '../Skills/Skills.component';

import styles from './Cards1.module.css';
import { avatar7 } from '../../resources/Images';

const EventCard1 = props => {
    return (
        <div className={`${styles.EventWrapper}`}>
            <div className={`${styles.EventBackgroundImage}`}>
                <div className={`${styles.EventBackgroundGradient}`}>
                    <div>
                        <img src= {avatar7} alt='avatar 7' className='w-14 h-14 rounded-full border-4 border-white shadow-2xl'/>
                    </div>

                    <div className={`${styles.EventDateArea}`}>
                        <p className={`${styles.EventDate}`}>12. Mai</p>
                    </div>

                    <p className={`${styles.EventTitle}`}> Event Titel </p>

                    <p className={`${styles.EventDescription}`}>Lörem ipsum anar epipp som doskapet, kontradade mivårade..</p>

                    <p className={`${styles.EventLink}`}> Mehr anseigen </p>
                </div>

            </div>
            <div className={`${styles.SkillsArea}`}>
                <Skills text='Subskill' color = 'primary-lila'/>
                <Skills text='Subskill' color = 'primary-lila'/>
                <p className={`${styles.SkillsNumber} text-primary-blue`}>24..</p>
            </div>
            
        </div>
    )
}

export default EventCard1;