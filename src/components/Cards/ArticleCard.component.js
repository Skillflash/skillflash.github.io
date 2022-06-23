import React from 'react';

import styles from './Cards.module.css';
import {avatar1, avatar2} from '../../resources/Images'
import { FiCornerUpRight, FiThumbsUp, FiMessageCircle, FiMoreVertical } from "react-icons/fi";

const ArticleCard = props => { 
    return (
        <div className={`${styles.articleWrapper} bg-neutral-white border-primary-lila hover:border-neutral-white`}>
            <div className={`${styles.articleHeader}`}>
                <img src={avatar1} alt="avatar" className={`${styles.articleHeaderImage}`} />
                <div className={`${styles.articleHeaderNameWrapper}`}>
                    <p className={`${styles.articleHeaderNameTitle} text-neutral-black`}>Name</p>
                    <p className={`${styles.articleHeaderNameSubTitle} text-neutral-grey`}>Name</p>
                </div>
                <FiMoreVertical  className={`${styles.articleHeaderIcon} text-neutral-black`} />
            </div>
            <div className={`${styles.articleBody}`}>
                <p className={`${styles.articleBodyTitle} text-neutral-black`}>Title</p>
                <p className={`${styles.articleBodySubTitle} text-gray-700`}>Subtitle</p>
                <p className={`${styles.articleBodyPara} text-gray-700`}>Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, Lorem ipsum carrots, enhanced undergraduate developer...</p>
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
                <img src={avatar2} alt="avatar" className={`${styles.articleFooterImage}`} />
                <input className={`${styles.articleFooterInput} text-neutral-black`} placeholder='Enter your comment' />
            </div>
        </div>
    )
}

export default ArticleCard;