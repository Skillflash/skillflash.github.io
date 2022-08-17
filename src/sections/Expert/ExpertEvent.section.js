import React from 'react'

import { EventCard } from '../../components';
import styles from './Expert.module.css';

const ExpertEvents = props => {
  const { events } = props;  
  
  return (
    <div className={`${styles.expertEventWrapper}`}>
      {events.map((event, index) => <EventCard event={event} />)}
    </div>
  )
}

export default ExpertEvents