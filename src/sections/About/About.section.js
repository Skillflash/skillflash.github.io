import React, { useState } from 'react';
import { avatar13, arrow_down, phone, spiral_arrow, vertical_spiral } from '../../resources/Images';
import { MdLocationPin } from 'react-icons/md';

import styles from './About.module.css';
import { ExpertCard } from '../../components';
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

            <div className='md:w-[300px]'>           
            <img src={arrow_down} alt="" className='md:mt-10 ml-48 md:ml-40 mt-10 left-56 md:w-60 md:h-60 w-36 h-36'/>
            </div>

            </div>
        </div>

        <div className={`${styles.expertWrapper}`}>
            <div className={`${styles.expertInfoBox}`}>
            <div className={`${styles.expertInfoWrapper}`}>
                <h4 className={`${styles.expertInfoTitle}`}> Die Suche.. </h4>
                <h4 className={`${styles.expertInfoTitleMd}`}> {client.name} sucht </h4>
                <p className={`${styles.expertInfoContentMd}`}>..auf unserer Plattform nach den gewünschten Skills und findet die passende Expertin.</p>
                <p className={`${styles.expertInfoContent}`}>..startet Paul auf unserer Plattform nach angabe der gewünschten Skills und lernt die Projektmanagerin, Antonia, kennen.</p>
            </div>
            <div className={`${styles.expertPhoneImageWrapper}`}>
                <img src={phone} alt="phone"  className={`${styles.expertPhoneImage}`}/>
                <div className='ml-32 -mt-10'>
                
                </div>
            </div>            
            <div className={`${styles.expertInfoWrapper}`}>
                <h4 className={`${styles.expertInfoTitle}`}> {client.name} sucht </h4>
                <p className={`${styles.expertInfoContent}`}>..auf unserer Plattform nach den gewünschten Skills und findet die passende Expertin.</p>
                <div className={`${styles.expertCard}`}>
                    <ExpertCard expert={experts[1]} skillcolor = 'neutral-black'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About