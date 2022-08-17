import React from 'react';
import {MdLocationPin, MdOutlineBookmarkAdd} from 'react-icons/md';
import {RiQuestionAnswerFill} from 'react-icons/ri';
import { github, instagram, linkedIn, youtube } from '../../resources/Images';

import styles from './Cards.module.css';

const expertProfileCard = props => {
  
   const { expert } = props;

  return (
    <div className={`${styles.expertProfileCardWrapper}`}>
        <button
            className={`${styles.eventCardBook} text-secondary-pink bg-neutral-white`}
          >
            <MdOutlineBookmarkAdd />
          </button>
        <img src={`${process.env.REACT_APP_SECRET_DIRECTUS_LINK}assets/${expert.profileImage.id}${process.env.REACT_APP_IMAGE_EXTENSIONS}`} alt="" className={`${styles.expertProfileCardImage}`} />     
        <h4 className={`${styles.expertProfileCardName} from-secondary-pink to-secondary-yellow`}>{expert.firstName} {expert.lastName}</h4>   
        <p className={`${styles.expertProfileCardUserName}`}> {expert.username} </p>    
        <p className={`${styles.expertProfileCardDescription}`}>{expert.shortBio}</p>   
        <div className='flex mt-6'>
            <MdLocationPin className='mt-1' />
            <p className={`${styles.expertProfileCardAddress}`}>{expert.address}</p>
        </div> 

        <div className={`${styles.expertProfileCardButton} from-secondary-pink to-secondary-yellow`}>
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