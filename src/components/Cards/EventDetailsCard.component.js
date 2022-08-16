import React from "react";
import { MdLocationPin, MdOutlineBookmarkAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import styles from "./Cards.module.css";
import EventButton from "../Buttons/EventButton.component";
import { IoFilmOutline } from "react-icons/io5";
import LoadingIndicator from "../Loader/Loader.component";
import theme from "../../resources/theme/theme";

const EventDetailsCard = (props) => {
  const { event, loading } = props;

  return (
    <>
      {loading ? 
      <div className={`${styles.eventCardLoading} bg-transparent`}>
        <LoadingIndicator />
      </div>
       : <div className={`${styles.eventCard} bg-neutral-white`}>
        <div className={`${styles.eventCardImageWrapper}`}>
          <img
            src={`${process.env.REACT_APP_SECRET_DIRECTUS_LINK}assets/${event?.eventImage.id}${process.env.REACT_APP_IMAGE_EXTENSIONS}`}
            alt={event && event?.eventImage.type}
            className={`${styles.eventCardImage}`}
          />
          <button
            className={`${styles.eventCardBook} text-secondary-pink bg-neutral-white`}
          >
            <MdOutlineBookmarkAdd />
          </button>
        </div>
        <div className="p-5">
          <h6
            className={`${styles.eventTitle} from-secondary-pink to-secondary-yellow`}
          >
            Speaking about {event && event?.name}
          </h6>
          <div className={`${styles.EventDateArea} bg-neutral-black`}>
            <Moment className={`${styles.EventDate} text-neutral-white`} format="D MMM" withTitle>
              {event && event.startDate}
            </Moment>
          </div>
          <div className="my-5 border border-neutral-grey" />
          <div className={`${styles.eventSkills}`}>
            {event?.skills &&
              event?.skills?.map((skill) => {
                return (
                  <Link
                    to={`/project`}
                    key={skill.id}
                    className={`${styles.eventSkillWrapper} bg-neutral-black`}
                  >
                    <p className={`${styles.eventSkill} text-neutral-white`}>
                      {skill.MainSkills_id.skillName}
                    </p>
                  </Link>
                );
              })}
          </div>
          <div className={`${styles.eventZoom} self-start text-neutral-black`}>
            <MdLocationPin
              size={16}
              className="mr-1 text-2xl text-neutral-black"
            />
            <p className={`${styles.eventZoomText}`}>
              <h4 className="no-underline mr-1.5">{event && event?.locationType}</h4> {event?.locationType.toLowerCase() === 'online' ? <a href={event?.locationLink} className={`${styles.eventLink}`} target='_blank' rel="noreferrer">link</a> : event?.locationLink}
            </p>
          </div>
          <div>
            <p className={`${styles.eventPriceRange} text-neutral-black`}>
              {event && event?.minTicketPrice}€ - {event && event?.maxTicketPrice}
              €
            </p>
          </div>
          <EventButton>
            <p className={`${styles.buttonText} text-neutral-white`}>
              Tickets buchen
            </p>
            <IoFilmOutline
              className={`${styles.buttonIcon} text-neutral-white`}
            />
          </EventButton>
        </div>
      </div>}
    </>
  );
};

export default EventDetailsCard;
