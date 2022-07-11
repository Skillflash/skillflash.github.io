import React from 'react'
import styles from './Skills.module.css';

const Skills = props => {
  const { text, color } = props;
  let borderColor = '';
  let textColor = '';

  if (color.toLowerCase() === 'orange') {
    borderColor = 'border-primary-orange';
    textColor = 'text-primary-orange';
  }
  if (color.toLowerCase() === 'lila') {
    borderColor = 'border-primary-lila';
    textColor = 'text-primary-lila';
  }
  if (color.toLowerCase() === 'blue') {
    borderColor = 'border-primary-blue';
    textColor = 'text-primary-blue';
  }
  if (color.toLowerCase() === 'rosa') {
    borderColor = 'border-secondary-rosa';
    textColor = 'text-secondary-rosa';
  }
  if (color.toLowerCase() === 'black') {
    borderColor = 'border-neutral-black';
    textColor = 'text-neutral-black';
  }
  if (color.toLowerCase() === 'orange') {
    borderColor = 'border-primary-orange';
    textColor = 'text-primary-orange';
  }

  return(
    <div className={`${styles.SkillBox} ${borderColor} `}>
        <p className={`${styles.SkillText} ${textColor}`}>{text}</p>
    </div>
)
}

export default Skills