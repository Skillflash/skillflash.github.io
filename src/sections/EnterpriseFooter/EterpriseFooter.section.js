import React from "react";
import { StatsButton, SumbitInput } from "../../components";
import { avatar1, avatar14, avatar15, avatar16, avatar17 } from "../../resources/Images";
import { IconName, MdThumbDown, MdThumbUp } from "react-icons/md";

import styles from "./EnterpriseFooter.module.css";

const EnterpriseFooter = () => {
  return (
    <section className={`${styles.mainWrapper} ${styles.radialWrapper}`}>
      <div className={`${styles.mainDotWrapper}`}>
        <div className={`${styles.topCurve}`}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"  className={`${styles.topCurveFill}`}></path>
            </svg>
        </div>
        <div className={`${styles.contentWrapper}`}>
          <div className={`${styles.contentBox} bg-neutral-white`}>
            <h6 className={`${styles.contentBoxTitle}`}>Unser Team..</h6>
            <div className={`${styles.contentBoxWrapper}`}>
              <div className={`$ -mb-3`}>
                <img alt='user' src={avatar16} className={`${styles.contentBoxImage} bg-neutral-white`} />
                <h5 className={`${styles.contentBoxName} text-neutral-black`}>Oscar Schröder</h5>
                <h6 className={`${styles.contentBoxSector} text-neutral-black`}>Sales &amp; Finanzen</h6>
              </div>
              <div className={`$ -mb-3`}>
                <img alt='user' src={avatar17} className={`${styles.contentBoxImage} bg-neutral-white`} />
                <h5 className={`${styles.contentBoxName} text-neutral-black`}>Leonardo Bornhäußer</h5>
                <h6 className={`${styles.contentBoxSector} text-neutral-black`}>Produkt Design</h6>
              </div>
              <div className={`$ -mb-3`}>
                <img alt='user' src={avatar15} className={`${styles.contentBoxImage}`} />
                <h5 className={`${styles.contentBoxName} text-neutral-black`}>Tobias Braun</h5>
                <h6 className={`${styles.contentBoxSector} text-neutral-black`}>IT &amp; Sicherheit</h6>
              </div>
              <div className={`$ -mb-3`}>
                <img alt='user' src={avatar14} className={`${styles.contentBoxImage}`} />
                <h5 className={`${styles.contentBoxName} text-neutral-black`}>Antonia Sensen</h5>
                <h6 className={`${styles.contentBoxSector} text-neutral-black`}>Media &amp; Netzwerk</h6>
              </div>
            </div>
          </div>
          <div className={`${styles.contentBox} bg-neutral-white`}>
            <h6 className={`${styles.contentBoxTitle}`}>..hat noch eine Frage:</h6>
            <div>
              <p className={`${styles.contentText} text-neutral-black`}>
                Wir legen großen Wert auf Deine Meinung und möchten gerne wissen, 
                wie Du unser Vorhaben findest?
              </p>
              <div className={`${styles.statsWrapper}`}>
                <StatsButton invert>
                  <MdThumbUp className={`${styles.statsIcon} text-neutral-white`} />
                </StatsButton>
                <StatsButton>
                  <MdThumbDown className={`${styles.statsIcon} text-primary-blue`} />
                </StatsButton>
              </div>
              <div className={`${styles.statsWrapper} w-4/5 md:w-2/3 mx-auto`}>
                <SumbitInput
                  placeholder={'Email'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFooter;
