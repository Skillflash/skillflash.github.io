import React, { useState } from 'react';
import { avatar13, arrow_down, phone, spiral_arrow } from '../../resources/Images';
import { MdLocationPin } from 'react-icons/md';

import styles from './About.module.css';
import { ExpertCard1 } from '../../components';
import experts from '../../dummy/experts';

const About = () => {
  const [client, setClient] = useState({name:'Paul', address: 'Hidelsheim'});
  const [skills, setSkills] = useState(['Klassisch','Agil']);
  const [selectedSkills, setSelectedSkills] = useState(['Projektmanagement']);
  return (
    <div className={`${styles.mainWrapper}`}>
        <div className={`${styles.clientWrapper}`}>

            <div className={`${styles.clientInfoWrapper}`}>
                <h4 className={`${styles.clientInfoTitle}`}> Das is {client.name} </h4>
                <p className={`${styles.clientInfoContent}`}>..er wohnt in Hildesheim und sucht den oder die Richtige für sein Projektmanagement vor Ort.</p>
                <h6 className={`${styles.clientSkillSearch}`}> Gesuchte Skills: </h6>

                <div className={`${styles.clientSkills}`}>
                    {selectedSkills.map((selectedSkill,index)=>
                    <button key={index} className={`${styles.selectedSkill}`}>
                        <p className='text-white font-quicksand font-semibold'> {selectedSkill} </p>
                    </button>
                    )}

                    {skills.map((skill,index)=>
                    <button key={index} className={`${styles.buttonSkill}`}>
                        <p className='text-neutral-black font-quicksand font-semibold'> {skill} </p>
                    </button>
                    )}
                </div>

                <div className={`${styles.clientAddress}`}>
                    <MdLocationPin size={16}  className='mt-1 mr-3 text-neutral-black'/>
                    <p className='underline text-base font-bold text-neutral-black'> {client.address} </p>
                </div>
            </div>

            <div className={`${styles.clientImageWrapper}`}>
                <img src={avatar13} alt="profile"  className={`${styles.clientImage}`}/>
            </div>
            <img src={arrow_down} alt="" className='mt-56 -ml-28'/>
        </div>

        <div className={`${styles.expertWrapper}`}>
            <div className={`${styles.expertPhoneImageWrapper}`}>
                <img src={phone} alt="phone"  className={`${styles.expertPhoneImage}`}/>
                <div className='ml-32 -mt-10'>
                <img src={spiral_arrow} alt=""/>
                </div>
            </div>
            
            <div className={`${styles.expertInfoWrapper}`}>
                <h4 className={`${styles.expertInfoTitle}`}> {client.name} sucht </h4>
                <p className={`${styles.expertInfoContent}`}>..auf unserer Plattform nach den gewünschten Skills und findet die passende Expertin.</p>
                <div className={`${styles.expertCard}`}>
                    <ExpertCard1 expert = {experts[1]} skillcolor = 'neutral-black'/>
                </div>
            </div>
        </div>



    </div>
  )
}

export default About