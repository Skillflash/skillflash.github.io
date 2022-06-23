import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import { avatar6, flower1 } from '../../resources/Images';

import styles from './Cards.module.css';

const EventCard = props => {
    return (
        <div className={`${styles.eventWrapper} bg-neutral-white border-secondary-pink hover:border-transparent`}>
            <div className={`${styles.articleHeader} px-3`}>
                <img src={avatar6} alt="avatar" className={`${styles.articleHeaderImage}`} />
                <div className={`${styles.articleHeaderNameWrapper}`}>
                    <p className={`${styles.articleHeaderNameTitle} text-neutral-black`}>Name</p>
                    <p className={`${styles.articleHeaderNameSubTitle} text-neutral-grey`}>Name</p>
                </div>
                <FiMoreVertical  className={`${styles.articleHeaderIcon} text-neutral-black`} />
            </div>
            <div className={`${styles.eventBody}`}>
                <img alt='flower' src={flower1} className={`${styles.eventBodyImage}`} />
                <p className={`${styles.eventDate} text-neutral-white bg-secondary-pink`}>12. Mai</p>
            </div>
            <div className={`${styles.eventFooter} px-3`}>
                <p className={`${styles.eventName} text-neutral-white bg-secondary-pink`}>Event</p>
                <p className={`${styles.articleBodyTitle} text-neutral-black`}>Title</p>
                <p className={`${styles.articleBodySubTitle} text-gray-700`}>Subtitle</p>
            </div>
        </div>
    )
}

export default EventCard;