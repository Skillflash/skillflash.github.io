import React from 'react'
import { EventCard } from '../../components';

const ExpertEvents = (props) => {
  const {expert} =props;  
  return (
    <div className='md:grid md: grid-cols-3 mg: gap-2'>
        {
            expert.events.map(
                (evt, index) => <EventCard />
            )
        }
    </div>
  )
}

export default ExpertEvents