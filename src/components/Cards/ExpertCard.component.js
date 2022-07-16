import React from 'react';
import { IoAddCircleOutline, IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';

import styles from './Cards.module.css';
import {Skills} from '..'

const ExpertCard = props => {
    const { expert, skillcolor } = props;

    return (
        <div className={`${styles.ExpertWrapper}`}>
            <div className={`${styles.ExpertBody}`}>
                <div>
                    <img src= {expert.image} alt='avatar 7' className={`${styles.ExpertImage}`}/>
                </div>
                <p className={`${styles.ExpertTitle}`}> {expert.firstName} {expert.lastName} </p>
                <p className={`${styles.ExpertFunction}`}><span className='font-bold'> {expert.experience} Jahre</span> Berufserfahrung </p>
                <div className = {`${styles.ExpertAddress}`}>
                    <MdLocationPin size = {16} className = 'm-1' /> 
                    <p> {expert.address} </p>
                </div>
                <div className='p-6'>
                    {
                        expert.domain.map((domain, index)=>
                            <button className={`${styles.ExpertDomain}`}>
                                <p> {domain} </p>
                            </button>
                        )
                    }
                <div className={`${styles.ExpertSkills}`}>
                    {
                        expert.skills.map((skill,index) =>
                            <button className={`${styles.ExpertSkill} text-${skillcolor} border-${skillcolor}`}>
                                <p> {skill} </p>
                            </button>
                        )
                    }
                    <p className= {`${styles.ExpertSkillNumber} text-${skillcolor}`}>24..</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertCard;