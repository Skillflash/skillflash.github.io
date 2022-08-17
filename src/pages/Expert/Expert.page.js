import React from 'react'
import { useParams } from 'react-router-dom'

import {TopNavBar } from '../../components'
import { useGetExpert, useGetExpertEvents } from '../../hooks'
import { ExpertDetails, ExpertHeader } from '../../sections'

const Expert = (props) => {
  const {scrollY} = props

  const {username} = useParams();
  let expert = useGetExpert(username);
  let events = useGetExpertEvents(username);

  return (
    <section>
      <TopNavBar scrollY={scrollY} />
      <ExpertHeader />
      <ExpertDetails expert={expert} events={events} />
    </section>
  );
}

export default Expert