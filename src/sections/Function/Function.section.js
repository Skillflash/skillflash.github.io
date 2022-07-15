import React from 'react';
import { check } from '../../resources/Icons';
import { EnterpriseHeaderWrapper } from '../../components';
import { desktop } from '../../resources/Images'

import styles from './Function.module.css';

const Function = props => {
    const { scrollY } = props;
    return (
        <EnterpriseHeaderWrapper scrollY={scrollY}>
            <h1 className={`${styles.functionHeader}`}>Funktionen</h1>
            <p>Mit uns wird es zukünftig eine Übersicht über Veranstaltungen
                in der Region geben.<br /> Zusätzlich erleichtern wir das Zurückgreifen auf
                regionale <br />Ressourcen durch eine Suche und Biete Funktion.</p>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <ul>
                        <ol > <img src={check} className={`${styles.check}`} width='20px' alt='check' /> &nbsp; Marktplatz für Leistungen und Events</ol>
                        <ol>  <img src={check} className={`${styles.check}`} width='20px' alt='check' /> &nbsp;  Eventerstellung und -verwaltung</ol>
                        <ol>  <img src={check} className={`${styles.check}`} width='20px' alt='check' /> &nbsp;  Ticketbuchungen und -verwaltung</ol>
                        <ol>  <img src={check} className={`${styles.check}`} width='20px' alt='check' /> &nbsp;  Öffentliche Mitglieder Profile</ol>
                        <ol>  <img src={check} className={`${styles.check}`} width='20px' alt='check' /> &nbsp;  LinkedIn  Verknüpfung</ol>
                        <ol>  <img src={check} className={`${styles.check}`} width='20px' alt='check' /> &nbsp;  Blog oder Magazin</ol>
                    </ul>
                </div>
                <div>
                    <img className={`${styles.img}`} src={desktop} alt="desktop" width="70%" />
                </div>
            </div>
        </EnterpriseHeaderWrapper>
    )
}

export default Function;