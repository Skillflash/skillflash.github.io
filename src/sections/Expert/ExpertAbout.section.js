import React from 'react';
import styles from './Expert.module.css';

const ExpertAbout = (props) => {

  const {expert} = props;  

  return (
    <div className = {`${styles.aboutWrapper}`}>
        <h6 className = {`${styles.aboutUserName}`}> Hi 👋 ich bin {expert.username}.. </h6>
        <p className = {`${styles.aboutDescription}`}> {expert.shortBio} </p>
        <h6 className = {`${styles.aboutUserName}`}> Das sind meine Skills..</h6>
        <div className={`${styles.aboutSkills}`}>
          {
            expert.skills.map((skill, index) =>
            <button key={index} className='bg-neutral-black px-3 py-1 rounded-3xl shadow-lg m-1 hover:bg-opacity-50 text-white font-quicksand font-semibold'>
              {skill.MainSkills_id.skillName}
            </button>
            )
          }
        </div>
        <h6 className = {`${styles.aboutUserName}`}> Persönlich beschreibe ich mich so.. </h6>
        <p className = {`${styles.aboutDescription}`}>{expert.description}</p>

        
    </div>
  )
}

export default ExpertAbout