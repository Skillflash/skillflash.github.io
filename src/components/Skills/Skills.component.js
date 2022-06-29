import React from 'react'
import styles from './Skills.module.css';

const Skills = props => {
  const { text, color } = props;
  return(
    <div className={`${styles.SkillBox} border-${color} `}>
        <p className={`${styles.SkillText} text-${color}`}>{text}</p>
    </div>
)
}

export default Skills