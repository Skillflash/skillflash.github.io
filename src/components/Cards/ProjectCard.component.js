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
  const { skill } = props;

  return (
    <div className={`${styles.EventWrapper}`}>
      <div className={`${styles.projectBackgroundImageWrapper}`}>
        <img
          src={`${process.env.REACT_APP_SECRET_DIRECTUS_LINK}assets/${skill.image.id}${process.env.REACT_APP_IMAGE_EXTENSIONS}`}
          alt={skill.skillName}
          className={`${styles.projectBackgroundImage}`}
        />
        <div className={`${styles.projectBackgroundGradient}`}>
          <NavLink
            to={`/project/${skill.skillName}`}
            className={`${styles.projectNameWrapper} bg-neutral-black`}
          >
            <p className={`${styles.projectName} text-neutral-white`}>
              {skill.skillName}
            </p>
          </NavLink>
          <p className={`${styles.EventDescription} text-neutral-black`}>
            {skill?.description.substring(0, 55)}{" "}
            {skill?.description.length > 55 && "..."}
          </p>
          <Link
            to={`/event/${skill.skillName}`}
            className={`${styles.EventLink} from-primary-blue to-primary-lila decoration-primary-blue`}
          >
            Mehr anseigen
          </Link>
        </div>
      </div>
      <div className={`${styles.SkillsArea}`}>
        {skill.subskills &&
          skill.subskills.length >= 1 &&
          skill.subskills.slice(0, 2).map((subskill, index) => (
            <button
              key={index}
              className={`${styles.skillButton} bg-neutral-white border-neutral-black hover:bg-neutral-grey-light`}
            >
              <p className={`${styles.skillButtonText} text-neutral-black`}>
                {subskill.SubSkill_id && subskill.SubSkill_id.name.substring(0, 8)}{subskill.SubSkill_id && subskill.SubSkill_id.name.length >= 9 && '...'}
              </p>
            </button>
          ))}
        {skill.subskills.length > 2 && <p className={`${styles.SkillsNumber} text-neutral-black`}>{ skill.subskills.length - 2 }...</p>}
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
