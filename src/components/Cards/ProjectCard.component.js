import React from "react";
import {
  IoAddCircleOutline,
  IoHeartOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { avatar14 } from "../../resources/Images";

import styles from "./Cards.module.css";

const ProjectCard = (props) => {
  const { event } = props;

  return (
    <div className={`${styles.EventWrapper}`}>
      <div className={`${styles.projectBackgroundImageWrapper}`}>
        <img
          src={`https://50fx80xt.directus.app/assets/${event.Previewimg.id}?key=system-large-cover&cache-buster=KkcpWsbzGXH2dhxye_kWu&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzODcwMWE2LTdkNTAtNDE2Yi1iYmU3LTkzYjBjZDY4OWY5MyIsInJvbGUiOiIwMzlhZmJjNy0wYWZkLTRkMTctYTQ0Zi1jN2I5NTYxOWM5OTAiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjEsImlhdCI6MTY1OTUyOTg4MCwiZXhwIjoxNjU5NTMwNzgwLCJpc3MiOiJkaXJlY3R1cyJ9.HS3IHoFSzxPHAcYZ1jbgqChJSxBsuy4nxrR7V68hA8M`}
          alt={event.Name}
          className={`${styles.projectBackgroundImage}`}
        />
        <div className={`${styles.projectBackgroundGradient}`}>
          <NavLink
            to={`/project/${event.Name}`}
            className={`${styles.projectNameWrapper} bg-neutral-black`}
          >
            <p className={`${styles.projectName} text-neutral-white`}>
              {event.Name}
            </p>
          </NavLink>
          <p className={`${styles.EventDescription} text-neutral-black`}>
            {event?.Description.substring(0, 55)}{" "}
            {event?.Description.length > 55 && "..."}
          </p>
          <p
            className={`${styles.EventLink} from-primary-blue to-primary-lila decoration-primary-blue`}
          >
            {" "}
            Mehr anseigen{" "}
          </p>
        </div>
      </div>
      <div className={`${styles.SkillsArea}`}>
        {event.Expert &&
          event.Expert.Skills.length >= 1 &&
          event.Expert.Skills.map((skill, index) => (
            <button
              key={index}
              className={`${styles.skillButton} bg-neutral-white border-neutral-black hover:bg-neutral-grey-light`}
            >
              <p className={`${styles.skillButtonText} text-neutral-black`}>
                {skill.Skillname}
              </p>
            </button>
          ))}
        {/* <button className={`${styles.skillButton} bg-neutral-white border-neutral-black hover:bg-neutral-grey-light`}>
                        <p className={`${styles.skillButtonText} text-neutral-black`}>{event.Expert.Skill}</p>
                    </button> */}
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
