import React from 'react';
import { FiHeart, FiMessageCircle } from "react-icons/fi";

import styles from './Cards.module.css';
import { avatar3, avatar4 } from '../../resources/Images';

const ExpertCard = props => {
    return (
        <div className={`${styles.expertWrapper} bg-neutral-white`}>
            <h3 className={`${styles.expertTitle} text-neutral-black`}>Projektmanager:in</h3>
            <div className={`${styles.expertBody}`}>
                <div className={`${styles.expertBodyCategoryWrapper}`}>
                    <p className={`${styles.expertBodyCategoryText} bg-primary-blue text-neutral-white`}>Agile Coaching</p>
                    <p className={`${styles.expertBodyCategoryText} bg-primary-blue text-neutral-white`}>Training</p>
                    <p className={`${styles.expertBodyCategoryText} bg-primary-blue text-neutral-white`}>Workshops</p>
                    <p className={`${styles.expertBodyCategoryText} bg-primary-blue text-neutral-white`}>Speaker</p>
                </div>
                <div className={`${styles.exportBodyWrapper}`}>
                    <img className={`${styles.expertBodyImage}`} alt='avatar' src={avatar3} />
                    <p className={`${styles.expertBodyName} text-gray-700`}>Vor- und Nachname</p>
                </div>
            </div>
            <div className={`${styles.expertFooter}`}>
                <img className={`${styles.articleFooterImage}`} alt='avatar' src={avatar4} />
                <p className={`${styles.expertFooterName} text-neutral-black`}>Name</p>
                <button className={`${styles.expertFooterCTAButton}`}>
                    <FiMessageCircle className={`${styles.expertFooterCTAButtonIcon} text-neutral-black`} />
                    <p className={`${styles.expertFooterCTAButtonText}`}>100</p>
                </button>
                <button className={`${styles.expertFooterCTAButton}`}>
                    <FiHeart className={`${styles.expertFooterCTAButtonIcon} text-neutral-black`} />
                    <p className={`${styles.expertFooterCTAButtonText}`}>100</p>
                </button>
            </div>
        </div>
    )
}

export default ExpertCard;