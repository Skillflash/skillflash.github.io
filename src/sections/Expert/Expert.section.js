import React, { useState } from 'react';
import experts from '../../dummy/experts';

import styles from './Expert.module.css';
import ExpertAbout from './ExpertAbout.section';
import ExpertEvents from './ExpertEvent.section';

const Expert = (props) => {

  const {expert} = props

  const [toggleState, setToggleState] = useState(1)

  const toggleChange = index =>{
    setToggleState(index)
    console.log(toggleState)
  }
  
  return (
    <div>
        {/* Tabs */}
        <div className = {`${styles.tabsContainer}`}>
            <div 
            className={ toggleState === 1 ? `${styles.tabActive} mr-10` :   `${styles.tab} mr-10` }
            onClick= {() => toggleChange(1)}
            >
                <h5 className={ toggleState === 1 ? `${styles.tabTextActive} mr-10` :   `${styles.tabText} mr-10` }> Über Mich </h5>
            </div>

            <div 
            className={ toggleState === 2 ? `${styles.tabActive}` :   `${styles.tab}` }
            onClick= {() => toggleChange(2)}
            >
                <h5 className={ toggleState === 2 ? `${styles.tabTextActive}` :   `${styles.tabText}` }> Events </h5>
            </div>
        </div>
        

        {/* Sections */}
        <div className = {`${styles.contentsContainer}`}>
            <div className={ toggleState === 1 ? `${styles.tabContentActive}` :   `${styles.tabContent}` }><ExpertAbout expert = {experts[2]}/></div>
            <div className={ toggleState === 2 ? `${styles.tabContentActive}` :   `${styles.tabContent}` }><ExpertEvents expert = {experts[2]}/></div>
            
        </div>
        
    </div>
  )
}

export default Expert