import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Events.module.css';
import { EventDetailsCard, EventWrapper } from '../../components';
import { avatar12, avatar13, avatar16, avatar17 } from '../../resources/Images';

const EventDetailHeader = (props) => {
  const { scrollY, expert } = props;

  const navigate = useNavigate();

  const GoBack = () => {
    navigate(-1);
  };

  return (
    <EventWrapper styling="">
      <div className={styles.projectBackWrapper}>
        <button
          onClick={() => GoBack()}
          className={`${styles.projectBack} ${
            scrollY >= 200 ? "border-primary-orange" : "border-neutral-white"
          }`}
        >
          <IoArrowBack
            className={`${styles.projectBackIcon} ${
              scrollY >= 200 ? "text-primary-orange" : "text-neutral-white"
            }`}
          />
        </button>
      </div>
      <div className={`${styles.eventDetails}`}>
        <EventDetailsCard />
        <div className={`${styles.eventAuthor}`}>
          <div className={`${styles.eventAuthorDetails}`}>
            <img
              src={
                "http://localhost:8055/assets/c1982e98-5b6d-4327-807a-2561002029d7?access_token=mytoken&width=60&height=60&quality=80"
              }
              alt={expert.data && expert.data[0].author.profileImage.type}
              className={`${styles.eventAuthorImage} border-neutral-white`}
            />
            <h4 className={`${styles.eventAuthorName} text-neutral-white`}>
              {expert.data && expert.data[0].author.firstName}
            </h4>
            <p className={`${styles.eventAuthorText} text-neutral-white`}>
              {expert.data && expert.data[0].author.shortBio}
            </p>
          </div>
        </div>
      </div>
    </EventWrapper>
  );
};

export default EventDetailHeader;