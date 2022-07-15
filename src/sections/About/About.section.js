import React, { useState } from 'react';
import { avatar13, arrow_down, phone, spiral_arrow, vertical_spiral } from '../../resources/Images';
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
            <div className={`${styles.clientFlexBox}`}>
                <div className={`${styles.clientInfoWrapper}`}>
                    <h4 className={`${styles.clientInfoTitle}`}> Das is {client.name} </h4>
                    <p className={`${styles.clientInfoContent}`}>..er wohnt in Hildesheim und sucht den oder die Richtige für sein Projektmanagement vor Ort.</p>
                    
                </div>

                <div className={`${styles.clientImageWrapper}`}>
                    <img src={avatar13} alt="profile"  className={`${styles.clientImage}`}/>
                </div>
            </div>
            <div className='md:flex md:flex-wrap md:grid-cols-2 w-full justify-center md:-mt-28'>
            <div className='p-4 md:w-[404px]'>
            <h6 className={`${styles.clientSkillSearchMd}`}> Gesuchte Skills: </h6>
            <h6 className={`${styles.clientSkillSearch}`}> Er sucht folgende Skills: </h6>

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
            </div>           
            <div className='md:flex md:flex-row justify-center md:grid-cols-2'>
            <div className='md:w-80 flex'>
                <img src={vertical_spiral} alt="" className='md:w-56 md:hidden block md:ml-16 object-none object-left'/>
                <img src={spiral_arrow} alt="" className='md:w-56 hidden md:block md:ml-16 object-none object-center'/>
            </div>
            <div className={`${styles.expertCard}`}>
                    <h4 className={`${styles.expertInfoTitle}`}> Das ist Antonia..</h4>
                    <p className={`${styles.expertInfoContent}`}>..und sie organisert ihr 
Expertenprofil und ihre Angebote auf bei uns.</p>
           
                    <ExpertCard1 expert = {experts[1]} skillcolor = 'neutral-black'/>
            </div>
            </div>
        </div>



    </div>
  )
}

export default About