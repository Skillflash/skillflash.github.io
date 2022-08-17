import React, { useState } from 'react';

import { ExpertProfileCard, LoadingIndicator } from '../../components';
import ExpertAbout from './ExpertAbout.section';
import ExpertEvents from './ExpertEvent.section';
import styles from './Expert.module.css';

const ExpertDetails = (props) => {
  const {expert, events} = props;

  const {data, loading, error} = expert;

  const {_data, _loading, _error} = events;

  const [toggleState, setToggleState] = useState(1)

  const toggleChange = index =>{
    setToggleState(index)
  }
  
  return (
    <div className='-mt-16 flex relative max-w-[1440px] mx-auto'>
      {loading ? <LoadingIndicator /> :<div className='pl-16 pr-10'>
        <ExpertProfileCard expert={data}/>
      </div>}
      {loading || _loading ? <LoadingIndicator /> : 
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
                <div className={ toggleState === 1 ? `${styles.tabContentActive}` :   `${styles.tabContent}` }><ExpertAbout expert={data}/></div>
                <div className={ toggleState === 2 ? `${styles.tabContentActive}` :   `${styles.tabContent}` }><ExpertEvents events={_data}/></div>
            </div>
      </div>}
    </div>
  )
}

export default ExpertDetails