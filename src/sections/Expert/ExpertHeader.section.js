import React from 'react'
import { IoArrowBack } from 'react-icons/io5';
import { EventWrapper } from '../../components'
import { Link, useNavigate } from 'react-router-dom';

import styles from './Expert.module.css';

const ExpertHeader =props => {
  const { scrollY } = props;
  const navigate = useNavigate();

  const GoBack = () => {
      navigate(-1)
  }
  return (
    <div className='max-w-[1440px]'>
    <EventWrapper styling=''>
        <div className={styles.projectBackWrapper}>
                <button onClick={() => GoBack()} className={`${styles.projectBack} ${scrollY >= 200 ? 'border-primary-orange' : 'border-neutral-white'}`}>
                    <IoArrowBack className={`${styles.projectBackIcon} ${scrollY >= 200 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                </button>
            </div>
    </EventWrapper>
    </div>
  )
}

export default ExpertHeader