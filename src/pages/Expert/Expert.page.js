import React from 'react'
import { ExpertProfileCard } from '../../components'
import experts from '../../dummy/experts'
import { Expert } from '../../sections'

const ExpertPage = () => {
  return (
    <section>
      <div className='h-20 w-full bg-gradient-to-r from-secondary-yellow to-primary-orange'></div>
      <div className='-mt-16 flex'>
        <div className='pl-16 pr-10'>
          <ExpertProfileCard expert = {experts[2]}/>
        </div>
        <Expert expert = {experts[2]}/>
      </div>
    </section>
  )
}

export default ExpertPage