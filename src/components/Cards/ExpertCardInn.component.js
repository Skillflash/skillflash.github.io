import React from 'react';
import Skills from '../Skills/Skills.component';

import styles from './Cards.module.css';
import { avatar7 } from '../../resources/Images';
import { IoAddCircleOutline, IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';


const ExpertCardInn = props => {
    const {expert} = props;
    let navigate = useNavigate();


    const GoToExpert = () => {
        navigate(`/expert/${expert.username}`)
    }

    const StopP = event => {
        event.stopPropagation();
    }

    return (
        <div className={`${styles.ExpertWrapper}`} onClick={() => GoToExpert()}>
            <div className={`${styles.ExpertBody}`}>
                <div>
                    <img src={`${process.env.REACT_APP_SECRET_DIRECTUS_LINK}assets/${expert.profileImage.id}${process.env.REACT_APP_IMAGE_EXTENSIONS}`} alt='avatar 7' className={`${styles.ExpertImage}`}/>
                </div>
                <p className={`${styles.ExpertTitle}`}>{expert.firstName} {expert.lastName}</p>
                <p className={`${styles.ExpertFunction}`}><span className='font-bold'> {expert.yearsOfExperience} Jahre</span> Berufserfahrung </p>
            </div>
            <div className={`${styles.SkillsArea}`}>
            {expert.skills &&
                    expert.skills.length >= 1 &&
                    expert.skills.slice(0, 2).map((subskill, index) => (
                        <Skills text={`${subskill.MainSkills_id && subskill.MainSkills_id.skillName.substring(0, 8)}${subskill.MainSkills_id && subskill.MainSkills_id.skillName.length >= 9 ? '...' : ''}`} color={'blue'}/>
                ))}
                {expert.skills.length > 2 && <p className={`${styles.SkillsNumber} text-primary-blue`}>{expert.skills.length - 2}...</p>}
            </div>
            <div className={`${styles.cardFloatButtonsWrapper}`}>
                <button onClick={e => StopP(e)} className={`${styles.cardFloatButton} bg-neutral-white`}><IoAddCircleOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button onClick={e => StopP(e)} className={`${styles.cardFloatButton} bg-neutral-white`}><IoShareSocialOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button onClick={e => StopP(e)} className={`${styles.cardFloatButton} bg-neutral-white`}><IoHeartOutline className={`${styles.cardFloatButtonIcon} text-secondary-pink`} /></button>
            </div>
        </div>
    )
}

export default ExpertCardInn;