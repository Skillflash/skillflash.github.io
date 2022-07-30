import React from 'react';
import { IoAddCircleOutline, IoHeartOutline, IoShareOutline, IoShareSocialOutline } from 'react-icons/io5';

import styles from './Cards.module.css';
import Skills from '../Skills/Skills.component';
import { avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, team } from '../../resources/Images';
import { extractInitials } from '../../utils';

const TeamCard = props => {
    const { team } = props;

    return (
        <div className= {`${styles.TeamWrapper}`}>
            <div className= {`${styles.TeamBody}`}>
                <div>
                    {team.image ? <img src={avatar7} alt='avatar 7' className={`${styles.TeamImage}`} />
                        :
                        <h3 className={`${styles.TeamIni} bg-neutral-white text-neutral-black`}>{extractInitials(team.Name)}</h3>
                    }
                </div>
                <p className={`${styles.TeamTitle} text-neutral-black`}>{team.Name}</p>
                <div className={`${styles.TeamProfilesArea}`}>
                    {team.Users.slice(0,1).map((user, index) => user && user.image ? <img key={index} src= {avatar8} alt='avatar 8' className= {`${styles.TeamProfiles}`}/> : <h5 key={index} className={`${styles.TeamProfilesIni} bg-neutral-white text-neutral-black`}>{extractInitials(user.Firstname + ' ' + user.Lastname)}</h5>)}
                    {team.Users.slice(1).map((user, index) => user && user.image ? <img key={index} src= {avatar8} alt='avatar 8' className= {`${styles.TeamProfiles} -ml-2.5`}/> : <h5 key={index} className={`${styles.TeamProfilesIni} -ml-2.5 bg-neutral-white text-neutral-black`}>{extractInitials(user.Firstname + ' ' + user.Lastname)}</h5>)}
                </div>
            </div>
            <div className={`${styles.SkillsArea}`}>
                <Skills text={'Subskill'} color={'rosa'}/>
                <Skills text={'Subskill'} color={'rosa'}/>
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