import React from 'react';
import { ExpertProfileCard } from '../../components';
import experts from '../../dummy/experts';
import { ExpertAbout } from '../../sections';
import styles from './Expert.module.css';

const ExpertAboutPage = () => {
  return (
    <section>
      <div className={`${styles.pageHeader}`}></div>
      <div className={`${styles.pageBody}`}>
        <div className={`${styles.pageCard}`}>
          <ExpertProfileCard expert = {experts[2]}/>
        </div>
        <div className={`${styles.pageContent}`}>
          <ExpertAbout expert = {experts[2]}/>
        </div>
      </div>
      
    </section>
  )
}

export default ExpertAboutPage