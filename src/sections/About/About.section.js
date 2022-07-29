import React from 'react';
import { avatar13, arrow_down, spiral_arrow, vertical_spiral, phone1 } from '../../resources/Images';
import { MdLocationPin } from 'react-icons/md';

import styles from './About.module.css';
import { ExpertCard } from '../../components';
import experts from '../../dummy/experts';

const About = () => {

  return (
    <section className={`${styles.mainWrapper}`}>
          <div className={`${styles.clientBox}`}>
              <div>
                  <h4 className={`${styles.clientInfoTitle} from-secondary-pink to-secondary-yellow`}>Das ist Paul..</h4>
                  <p className={`${styles.clientInfoContent} text-neutral-black`}>
                      ..er wohnt in Hildesheim und 
                      sucht den oder die Richtige für sein Projektmanagement vor Ort.
                  </p>
                  <h5 className={`${styles.clientSkillSearchMd} from-secondary-pink to-secondary-yellow`}>Gesuchte Skills:</h5>
                  <h6 className={`${styles.clientSkillSearch} from-secondary-pink to-secondary-yellow`}> Er sucht folgende Skills: </h6>
                  <div className={`${styles.clientSkills}`}>
                      <button className={`${styles.selectedSkill}`}>
                        <p className='text-white font-quicksand font-semibold'> Projektmanagement </p>
                      </button>
                      <button className={`${styles.buttonSkill} border-neutral-black`}>
                        <p className='text-neutral-black font-quicksand font-semibold'> Klassich </p>
                      </button>
                      <button className={`${styles.buttonSkill} border-neutral-black`}>
                        <p className='text-neutral-black font-quicksand font-semibold'> Agil </p>
                      </button>
                  </div>
                  <div className={`${styles.clientAddress}`}>
                        <MdLocationPin size={16}  className='mt-1 mr-3 text-neutral-black'/>
                        <p className='underline text-base font-bold text-neutral-black'> Hidelsheim </p>
                  </div>
              </div>
              <div>
                  <img src={avatar13} alt="profile" className={`${styles.clientImage}`} />        
                  <img src={arrow_down} alt="" className={`${styles.arrowDown}`}/>
              </div>
          </div>
          <div className={`${styles.clientBox}`}>
              <div>
                  <div className={`${styles.expertPhoneImageWrapper}`}>
                      <h4 className={`${styles.expertInfoTitle} from-secondary-pink to-secondary-yellow`}> Die Suche.. </h4>
                      <p className={`${styles.expertInfoContent}`}>..startet Paul auf unserer Plattform nach angabe der gewünschten Skills und lernt die Projektmanagerin, Antonia, kennen.</p>
                      <img src={phone1} alt="phone" className={`${styles.expertPhoneImage}`} />
                      <img src={spiral_arrow} alt="" className={`${styles.arrowSpiral}`}/>
                      <img src={vertical_spiral} alt="" className={`${styles.arrowVertical}`} />
                </div>
              </div>
              <div>
                  <h4 className={`${styles.expertInfoTitleMd} from-secondary-pink to-secondary-yellow`}> Paul sucht.. </h4>
                  <p className={`${styles.expertInfoContentMd}`}>..auf unserer Plattform nach den gewünschten Skills und findet die passende Expertin.</p>
                  <div className={`${styles.expertCard} bg-neutral-white`}>
                      <h4 className={`${styles.expertInfoTitle} from-secondary-pink to-secondary-yellow`}> Das ist Antonia..</h4>
                      <p className={`${styles.expertInfoContent}`}>
                          ..und sie organisert ihr 
                          Expertenprofil und ihre Angebote auf bei uns.
                      </p>
                      <ExpertCard expert = {experts[1]} skillcolor = 'neutral-black'/>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default About