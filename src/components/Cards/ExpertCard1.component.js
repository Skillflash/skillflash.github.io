import React from 'react';
import Skills from '../Skills/Skills.component';

import styles from './Cards1.module.css';
import { avatar7 } from '../../resources/Images';


const ExpertCard1 = props => {
    return (
        <div className={`${styles.ExpertWrapper}`}>
            <div className={`${styles.ExpertBody}`}>
                <div>
                    <img src= {avatar7} alt='avatar 7' className={`${styles.ExpertImage}`}/>
                </div>
                <p className={`${styles.ExpertTitle}`}>Vor und Nachname </p>
                <p className={`${styles.ExpertFunction}`}><span className='font-bold'> 4 Jahre</span> Berufserfahrung </p>
                

            </div>
            <div className={`${styles.SkillsArea}`}>
                <Skills text='Subskill' color = 'primary-blue'/>
                <Skills text='Subskill' color = 'primary-blue'/>
                <p className={`${styles.SkillsNumber} text-primary-blue`}>24..</p>
            </div>
            
        </div>
    )
}

export default ExpertCard1;