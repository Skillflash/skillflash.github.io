import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Events.module.css';
import { EventDetailsCard, EventWrapper, LoadingIndicator } from '../../components';
import { avatar12, avatar13, avatar16, avatar17 } from '../../resources/Images';
import theme from '../../resources/theme/theme';

const EventDetailHeader = (props) => {
  const { scrollY, expert } = props;

  const {data, loading, error} = expert;

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
        <EventDetailsCard loading={loading} event={data} />
        <div className={`${styles.eventAuthor}`}>
          {loading ? <LoadingIndicator color={theme.NEUTRAL_WHITE} /> : data && <div className={`${styles.eventAuthorDetails}`}>
            <img
              src={`${process.env.REACT_APP_SECRET_DIRECTUS_LINK}assets/${data.author.profileImage.id}${process.env.REACT_APP_IMAGE_EXTENSIONS}`}
              alt={data && data.author.profileImage.type}
              className={`${styles.eventAuthorImage} border-neutral-white`}
            />
            <Link to={`/expert/${data.author.username}`} className={`${styles.eventAuthorName} text-neutral-white`}>
              {data && data.author.username}
            </Link>
            <p className={`${styles.eventAuthorText} text-neutral-white`}>
              {data && data.author.shortBio}
            </p>
          </div>}
        </div>
      </div>
    </EventWrapper>
  );
};

export default EventDetailHeader;