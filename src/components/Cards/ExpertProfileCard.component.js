import React from 'react';
import {MdLocationPin} from 'react-icons/md';
import {RiQuestionAnswerFill} from 'react-icons/ri';
import { github, instagram, linkedIn, youtube } from '../../resources/Images';

import styles from './Cards.module.css';

const expertProfileCard = (props) => {
  
   const { expert } = props; 

  return (
    <div className={`${styles.expertProfileCardWrapper}`}>
        <img src={expert.image} alt="" className={`${styles.expertProfileCardImage}`} />     
        <h4 className={`${styles.expertProfileCardName}`}>{ expert.firstName } { expert.lastName }</h4>   
        <p className={`${styles.expertProfileCardUserName}`}> {expert.userName} </p>    
        <p className={`${styles.expertProfileCardDescription}`}>{expert.description}</p>   
        <div className='flex mt-6'>
            <MdLocationPin className='mt-1' />
            <p className={`${styles.expertProfileCardAddress}`}> {expert.address} </p>
        </div> 

        <div className={`${styles.expertProfileCardButton}`}>
            <p>Frage Stellen</p>
            <RiQuestionAnswerFill color='white' className='mt-1 ml-2'/>
        </div>
        
        <div className={`${styles.expertProfileCardMediaGroup}`}>
            <img src={linkedIn} alt="" className={`${styles.expertProfileCardMedia}`} />
            <img src={instagram} alt="" className={`${styles.expertProfileCardMedia}`} />
            <img src={youtube} alt="" className={`${styles.expertProfileCardMedia}`} />
            <img src={github} alt="" className={`${styles.expertProfileCardMedia}`} />
        </div>


    </div>
  )
}

export default expertProfileCard