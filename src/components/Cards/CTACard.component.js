import React from 'react';

import styles from './Cards.module.css';
import { MdTravelExplore } from 'react-icons/md'
import { FiUpload } from 'react-icons/fi';

function CTACard() {
  return (
    <div>
        <div className={`${styles.CTAWrapper} from-secondary-pink to-primary-orange`}>
            <div className={`${styles.CTAContent}`}>
                <button>
                    <MdTravelExplore className={`${styles.CTAIcon}`}/>
                </button>

                <h1 className={`${styles.CTATitle}`}>Expertise anfragen</h1>
                <p className={`${styles.CTASubtitle}`}>Für mehr Verständnis in der Praxis</p>
            </div>            
        </div>

        <div className='mt-4 mb-3'>
            <div className={`${styles.CTAWrapper} from-primary-blue to-primary-lila`}>
                <div className={`${styles.CTAContent}`}>
                    <button>
                        <FiUpload className={`${styles.CTAIcon}`}/>
                    </button>
                    <h1 className={`${styles.CTATitle}`}>Expertise hochladen</h1>
                    <p className={`${styles.CTASubtitle}`}>Für mehr Verständnis in der Praxis</p>
                </div>            
            </div>
        </div>




    </div>
  )
}

export default CTACard