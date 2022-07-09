import React, { useEffect, useState } from 'react';
import { IoArrowBack, IoCloseCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import styles from './ProjectHeader.module.css';
import { HeaderWrapper } from '../../components';
import { FiFilter } from 'react-icons/fi';

const ProjectHeader = props => {
    const { scrollY } = props;
    const [activeSkills, setActiveSkills] = useState(['Projektmanagement']);
    const [selectedSkills, setSelectedSkills] = useState(['Projektmanagement']);
    const [skills, setSkills] = useState(['Klassich', 'Hauptskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill']);
    const [range, setRange] = useState(20);

    const showSize = () => {
        let screenWidth = window.screen.availWidth;
        setRange(screenWidth > 640 ? 20 : 6);
    }

    useEffect(() => {
        showSize()
        const watchResize = () => {
            window.addEventListener('resize', showSize);
        }
        watchResize();
        return () => {
            window.removeEventListener("resize", showSize);
        };
    }, []);

    return (
        <HeaderWrapper scrollY={scrollY}>
            <div className={`${styles.projectWrapper}`}>
                {selectedSkills.map((selectedSkill, index) =>
                    <button key={index} className={`text-neutral-white ${styles.projectButton} bg-neutral-black`}>
                        <h6 className={`${styles.projectButtonText}`}>{selectedSkill}</h6>
                        <IoCloseCircleOutline className={`${styles.projectButtonIcon}`} />
                    </button>
                )}
            </div>
            <div className={`${styles.projectSkillsWrapper}`}>
                {skills.slice(0,range).map((skill, index) =>
                    <button key={index} className={`text-neutral-black ${styles.projectSkillButton} bg-neutral-white border-neutral-black`}>
                        <h6 className={`${styles.projectSkillButtonText}`}>{skill}</h6>
                    </button>
                )}
            </div>
            <button className={`${styles.headerButton} ${scrollY >= 200 && styles.headerButtonFixed}`}>
                <h6 className={`${styles.headerButtonText} ${scrollY >= 200 ? `from-secondary-pink to-secondary-yellow` : 'from-neutral-white to-neutral-white'}`}>Suche konfigurieren</h6>
                <FiFilter className={`${styles.headerButtonIcon} ${scrollY >= 200 ? 'text-primary-orange' : 'text-neutral-white'}`} />
            </button>
            <div className={styles.projectBackWrapper}>
                <NavLink to='/' className={`${styles.projectBack} border-neutral-white`}>
                    <IoArrowBack className={`${styles.projectBackIcon} text-neutral-white`} />
                </NavLink>
            </div>
        </HeaderWrapper>
    )
}

export default ProjectHeader;