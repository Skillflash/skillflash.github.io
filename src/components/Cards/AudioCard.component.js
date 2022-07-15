import React from 'react';
import { IoAddCircleOutline, IoHeartOutline, IoPlayOutline, IoShareSocialOutline } from 'react-icons/io5';

import styles from './Cards.module.css'
import { avatar7 } from '../../resources/Images';
import {Skills} from '..';

const AudioCard = props => {
    return (
        <div className={`${styles.audioWrapper}`}>
            <div className={`${styles.audioBackgroundWrapper}`}>
                <div className={`${styles.audioBackgroundGradient}`}>
                    <div>
                        <img src= {avatar7} alt='avatar 7' className={`${styles.eventAuthorImage} border-neutral-white`}/>
                    </div>
                    <button className={`${styles.audioPlay} border-neutral-black`}>
                        <IoPlayOutline className={`${styles.audioPlayIcon}`} />
                    </button>
                    <p className={`${styles.EventTitle} text-neutral-black`}>Audio/Video Titel </p>
                    <p className={`${styles.EventDescription} text-neutral-black`}>Lörem ipsum anar epipp som doskapet, kontradade mivårade..</p>
                </div>
            </div>
            <div className={`${styles.SkillsArea}`}>
                <Skills text={'Subskill'} color={'black'}/>
                <Skills text={'Subskill'} color={'black'}/>
                <p className={`${styles.SkillsNumber} text-neutral-black`}>24..</p>
            </div>
            <div className={`${styles.cardFloatButtonsWrapper}`}>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoAddCircleOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoShareSocialOutline className={`${styles.cardFloatButtonIcon} text-primary-lila`} /></button>
                <button className={`${styles.cardFloatButton} bg-neutral-white`}><IoHeartOutline className={`${styles.cardFloatButtonIcon} text-secondary-pink`} /></button>
            </div>
        </div>
    )
}

export default AudioCard