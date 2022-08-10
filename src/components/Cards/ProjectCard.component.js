import React from "react";
import {
  IoAddCircleOutline,
  IoHeartOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { avatar14 } from "../../resources/Images";

import styles from "./Cards.module.css";

const ProjectCard = (props) => {
  const { event } = props;

  return (
    <div className={`${styles.EventWrapper}`}>
      <div className={`${styles.projectBackgroundImageWrapper}`}>
        <img
          src={`${process.env.REACT_APP_SECRET_DIRECTUS_LINK}assets/${event.eventImage.id}${process.env.REACT_APP_IMAGE_EXTENSIONS}`}
          alt={event.name}
          className={`${styles.projectBackgroundImage}`}
        />
        <div className={`${styles.projectBackgroundGradient}`}>
          <NavLink
            to={`/project/${event.name}`}
            className={`${styles.projectNameWrapper} bg-neutral-black`}
          >
            <p className={`${styles.projectName} text-neutral-white`}>
              {event.name}
            </p>
          </NavLink>
          <p className={`${styles.EventDescription} text-neutral-black`}>
            {event?.description.substring(0, 55)}{" "}
            {event?.description.length > 55 && "..."}
          </p>
          <Link
            to={`/event/${event.name}`}
            className={`${styles.EventLink} from-primary-blue to-primary-lila decoration-primary-blue`}
          >
            Mehr anseigen
          </Link>
        </div>
      </div>
      <div className={`${styles.SkillsArea}`}>
        {event.skills &&
          event.skills.length >= 1 &&
          event.skills.map((skill, index) => (
            <button
              key={index}
              className={`${styles.skillButton} bg-neutral-white border-neutral-black hover:bg-neutral-grey-light`}
            >
              <p className={`${styles.skillButtonText} text-neutral-black`}>
                {skill.MainSkills_id.skillName}
              </p>
            </button>
          ))}
        <p className={`${styles.SkillsNumber} text-neutral-black`}>24..</p>
      </div>
      <div className={`${styles.cardFloatButtonsWrapper}`}>
        <button className={`${styles.cardFloatButton} bg-neutral-white`}>
          <IoAddCircleOutline
            className={`${styles.cardFloatButtonIcon} text-primary-lila`}
          />
        </button>
        <button className={`${styles.cardFloatButton} bg-neutral-white`}>
          <IoShareSocialOutline
            className={`${styles.cardFloatButtonIcon} text-primary-lila`}
          />
        </button>
        <button className={`${styles.cardFloatButton} bg-neutral-white`}>
          <IoHeartOutline
            className={`${styles.cardFloatButtonIcon} text-secondary-pink`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
