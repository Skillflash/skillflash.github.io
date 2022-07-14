import React from "react";
import { CMSDashboard, user } from "../../resources/Images";
import style from "./EnterpriseFooter.module.css";
import { FaRocket } from 'react-icons/fa';


const EnterpriseFooter = (props) => {
    return (
        <section>
            <span className={style.container}>
                <img src={user} alt="user" width="5%"/>
                <span className={style.span}>Antonia nutzt das Dashboard..</span>
            </span>
            <p className={style.p}>
                ..einerseits zum Erstellen von Formaten, wie zum Beispiel Events <br />
                und andererseits zum Verwalten ihres öffentlichen Mitgliederprofils.
            </p>
            <img src={CMSDashboard} className={style.img} alt="CMSDashboard" />
            <button className={style.buttons}>
                Hier eine Demo vereinbaren  &nbsp; &nbsp;
                <FaRocket className={style.icon} />
            </button>
        </section>
    );
};

export default EnterpriseFooter;
