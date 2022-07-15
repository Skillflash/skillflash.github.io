import React from 'react';
import Skills from '../Skills/Skills.component';

import styles from './Cards.module.css';
import { avatar7 } from '../../resources/Images';
import { IoAddCircleOutline, IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';


const ExpertCard = props => {

    const { expert, skillcolor } = props

    let textColor = 'text-primary-'+ skillcolor;

    return (
        <div className={`${styles.ExpertWrapper}`}>
            <div className={`${styles.ExpertBody}`}>
                <div>
                    <img src= {expert.image} alt='avatar' className={`${styles.ExpertImage}`}/>
                </div>
                <p className={`${styles.ExpertTitle}`}> {expert.firstName} {expert.lastName} </p>
                <p className={`${styles.ExpertFunction}`}><span className='font-bold'> {expert.experience} Jahre</span> Berufserfahrung </p>
                {
                    expert.address === undefined ?
                    <p></p>:
                
                <div className = {`${styles.ExpertAddress}`}>
                    <MdLocationPin size = {16} className = 'm-1' /> 
                    <p> {expert.address} </p>
                </div>
                }
                <div className='p-6'>

                {
                    expert.domain === [] ?
                    <p></p> :
                
                <div>
                    {
                        expert.domain.map((domain, index)=>
                            <button className={`${styles.ExpertDomain}`}>
                                <p> {domain} </p>
                            </button>
                        )
                    }
                </div>
                }
                <div className={`${styles.ExpertSkills}`}>
                    {
                        expert.skills.map((skill,index) =>
                            <Skills text = {skill} color = {skillcolor} />
                        )
                    }
                    <p className= {`${styles.SkillsNumber} ${textColor}`}>24..</p>
                </div>
                </div>

            </div>
                
            <div className={`${styles.cardFloatButtonsWrapper}`}>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoAddCircleOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoShareSocialOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoHeartOutline className={`${styles.cardFloatButtonIcon} text-secondary-pink`} /></button>
            </div>
        </div>
    )
}

export default ExpertCard;