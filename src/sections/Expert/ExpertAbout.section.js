import React from 'react';
import styles from './ExpertAbout.module.css';

const ExpertAbout = (props) => {
  
  const {expert} = props;  

  return (
    <div className = {`${styles.aboutWrapper}`}>
        <h6 className = {`${styles.aboutUserName}`}> Hi 👋 ich bin {expert.userName}.. </h6>
        <p className = {`${styles.aboutDescription}`}> Lörem ipsum soren röforad ilig krohet, krokovis i ede i hol sara inte gena lörem ipsum soren. </p>
        <h6 className = {`${styles.aboutUserName}`}> Das sind meine Skills..</h6>
        <div className={`${styles.aboutSkills}`}>
        <h6 className = {`${styles.aboutUserName}`}> Persönlich beschreibe ich mich so.. </h6>
        <p className = {`${styles.aboutDescription}`}> Lörem ipsum soren röforad ilig krohet, krokovis i ede i hol sara inte gena lörem ipsum soren. Lörem ipsum soren röforad ilig krohet, krokovis i ede i hol sara inte gena lörem ipsum soren.Lörem ipsum soren röforad ilig krohet, krokovis i ede i hol sara inte gena lörem ipsum soren. Lörem ipsum soren röforad ilig krohet, krokovis i ede i hol sara inte gena lörem ipsum soren.Lörem ipsum soren röforad ilig krohet, krokovis i ede i hol sara inte gena lörem ipsum soren.</p>

        </div>
    </div>
  )
}

export default ExpertAbout