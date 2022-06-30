import React from 'react';
import Skills from '../Skills/Skills.component';

import styles from './Cards1.module.css';
import { avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, team } from '../../resources/Images';
import { IoAddCircleOutline, IoHeartOutline, IoShareOutline, IoShareSocialOutline } from 'react-icons/io5';

const TeamCard = props => {
    return (
        <div className= {`${styles.TeamWrapper}`}>
            <div className= {`${styles.TeamBody}`}>
                <div>
                    <img src= {team} alt='avatar 7' className= {`${styles.TeamImage}`}/>
                </div>
                <p className={`${styles.TeamTitle} text-neutral-black`}>Team-Name </p>
                <div className={`${styles.TeamProfilesArea}`}>
                    <img src= {avatar7} alt='avatar 7' className= {`${styles.TeamProfiles}`}/>
                    <img src= {avatar8} alt='avatar 8' className= {`${styles.TeamProfiles} ml-[-10px]`}/>
                    <img src= {avatar9} alt='avatar 9' className= {`${styles.TeamProfiles} ml-[-10px]`}/>
                    <img src= {avatar10} alt='avatar 10' className= {`${styles.TeamProfiles} ml-[-10px]`}/>
                    <img src= {avatar11} alt='avatar 11' className= {`${styles.TeamProfiles} ml-[-10px]`}/>
                    <img src= {avatar12} alt='avatar 12' className= {`${styles.TeamProfiles} ml-[-10px]`}/>
                </div>
                
                

            </div>
            <div className={`${styles.SkillsArea}`}>
                <Skills text={'Subskill'} color={'secondary-rosa'}/>
                <Skills text={'Subskill'} color={'secondary-rosa'}/>
                <p className={`${styles.SkillsNumber} text-secondary-rosa`}>24..</p>
            </div>
            <div className={`${styles.cardFloatButtonsWrapper}`}>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoAddCircleOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoShareSocialOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoHeartOutline className={`${styles.cardFloatButtonIcon} text-secondary-pink`} /></button>
            </div>
        </div>
    )
}

export default TeamCard;