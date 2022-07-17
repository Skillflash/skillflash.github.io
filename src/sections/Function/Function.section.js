import React from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

import { phone } from '../../resources/Images'
import styles from './Function.module.css';

const Function = props => {
    const { scrollY } = props;

    const functions = [
        'Marktplatz für diverse Formate',
        'Eventerstellung und -verwaltung',
        'Ticketbuchungen und -verwaltung',
        'Öffentliche Mitglieder Profile',
        'Mitgliederverwaltung',
        'Rollen & Rechte System',
        'LinkedIn Verknüpfung',
        'Blog oder Magazin'
    ]

    return (
        <section className={`${styles.mainWrapper}`}>
            <h2 className={`${styles.mainTitle}`}>Funktionen</h2>
            <p className={`${styles.mainText} text-neutral-black`}>
                Mit uns wird es zukünftig eine Übersicht über Veranstaltungen
                in der Region geben.<br className='hidden md:block' /> Zusätzlich erleichtern wir das Zurückgreifen auf
                regionale <br className='hidden md:block' />Ressourcen durch eine Suche und Biete Funktion.
            </p>
            <div className={`${styles.functionWrapper}`}>
                <img src={phone} alt='phone' className={`${styles.functionImage}`} />
                <ul className={`${styles.functionListWrapper}`}>
                    {functions.map((_function, index) => <li key={index} className={`${styles.functionList} text-neutral-black`}><IoCheckmarkCircleSharp className={`${styles.functionListIcon}`} />{_function}</li>)}
                </ul>
            </div>
        </section>
    )
}

export default Function;