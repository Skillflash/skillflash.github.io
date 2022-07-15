import React from "react";
import {
  CMSDashboard,
  user,
  user2,
  user3,
  profile,
} from "../../resources/Images";
import style from "./EnterpriseFooter.module.css";
import { FaRocket } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

const EnterpriseFooter = () => {
  return (
    <section>
      <span className={style.container}>
        <img src={user} alt="user" width="5%" />
        <span className={style.span}>Antonia nutzt das Dashboard..</span>
      </span>
      <p className={style.p}>
        ..einerseits zum Erstellen von Formaten, wie zum Beispiel Events <br />
        und andererseits zum Verwalten ihres öffentlichen Mitgliederprofils.
      </p>
      <img src={CMSDashboard} className={style.img2} alt="CMSDashboard" />
      <button className={style.buttons}>
        Hier eine Demo vereinbaren &nbsp; &nbsp;
        <FaRocket className={style.icon} />
      </button>
      <br />
      <br />
      <section className={style.section1}>
        <div class="grid grid-cols-2 ">
          <div>
            <br />
            <span className={style.span}>Unser Team..</span>
            <br />
            <br />
            <div class="grid grid-cols-2">
              <div>
                <img
                  className={style.img3}
                  src={user3}
                  alt="user"
                  width="30%"
                />
                <h6>Oscar Schröder</h6>
                <small>Tätigkeit</small>
                <br />
              </div>
              <div>
                <img
                  className={style.img3}
                  src={profile}
                  alt="user"
                  width="30%"
                />
                <h6>Olli/Tobi?</h6>
                <small>Tätigkeit</small>
                <br />
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div>
                <img
                  className={style.img3}
                  src={user2}
                  alt="user"
                  width="30%"
                />
                <h6>Leonardo Bornhäußer</h6>
                <small>Tätigkeit</small>
                <br />
              </div>
              <div>
                <img src={user} className={style.img3} alt="user" width="30%" />
                <h6>Antonia Sensen</h6>
                <small>Tätigkeit</small>
                <br />
              </div>
            </div>
            <div></div>
          </div>
          <div className={style.section2}>
            <span className={style.span}>..hat noch eine Frage:</span>
            <br />
            <br />
            <p className={style.p}>
              Wir legen großen Wert auf Deine Meinung und <br /> möchten gerne
              wissen,
              <br />
              wie Du unser Vorhaben findest?
            </p>
            <section className={style.groupButton}>
              <button className={style.faUpIcon}>
                <FaThumbsUp />
              </button>
              <button className={style.faDownIcon}>
                <FaThumbsDown value={{ color: "blue", size: "500px" }} />
              </button>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EnterpriseFooter;
