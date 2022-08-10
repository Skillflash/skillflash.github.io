import React from 'react'
import { ExpertProfileCard, TopNavBar } from '../../components'
import experts from '../../dummy/experts'
import { ExpertDetails, ExpertHeader } from '../../sections'

const Expert = (props) => {
  const {scrollY} = props
  return (
    <section>
      <TopNavBar scrollY={scrollY} />
      <ExpertHeader />
      <ExpertDetails expert={experts} />
    </section>
  );
}

export default Expert