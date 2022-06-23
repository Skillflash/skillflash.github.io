import React from 'react';
import { FiCornerUpRight, FiThumbsUp, FiMessageCircle, FiMoreVertical, FiPlay } from "react-icons/fi";

import { avatar5, avatar6 } from '../../resources/Images';
import styles from './Cards.module.css';

const AudioCard = props => {
    return (
        <div className={`${styles.audioWrapper} bg-neutral-white border-secondary-yellow hover:border-neutral-white`}>
            <div className={`${styles.articleHeader}`}>
                <img src={avatar5} alt="avatar" className={`${styles.articleHeaderImage}`} />
                <div className={`${styles.articleHeaderNameWrapper}`}>
                    <p className={`${styles.articleHeaderNameTitle} text-neutral-black`}>Name</p>
                    <p className={`${styles.articleHeaderNameSubTitle} text-neutral-grey`}>Name</p>
                </div>
                <FiMoreVertical  className={`${styles.articleHeaderIcon} text-neutral-black`} />
            </div>
            <div className={`${styles.audioBody}`}>
                <div className={`${styles.audioBodyIconWrapper} bg-neutral-grey`}>  
                    <FiPlay  className={`${styles.audioBodyIcon} text-neutral-black`} />
                </div>
                <p className={`${styles.audioBodyTitle} text-neutral-black`}>Title</p>
                <p className={`${styles.audioBodySubTitle} text-gray-700`}>Subtitle</p>
            </div>
            <div className={`${styles.articleCTA}`}>
                <button className={`${styles.articlCTAButton}`}>
                    <FiThumbsUp  className={`${styles.articleHeaderIcon} text-neutral-black`} />
                </button>
                <button>
                    <FiMessageCircle className={`${styles.articleHeaderIcon} text-neutral-black`} />
                </button>
                <button>
                    <FiCornerUpRight  className={`${styles.articleHeaderIcon} text-neutral-black`} />
                </button>
            </div>
            <div className={`${styles.articleFooter}`}>
                <img src={avatar6} alt="avatar" className={`${styles.articleFooterImage}`} />
                <input className={`${styles.articleFooterInput} text-neutral-black`} placeholder='Enter your comment' />
            </div>
        </div>
    )
}

export default AudioCard;
