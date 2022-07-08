import React, { useState } from 'react';
import { IoArrowBack, IoCloseCircleOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import styles from './ProjectHeader.module.css';
import { HeaderWrapper } from '../../components';

const ProjectHeader = props => {
    const { scrollY } = props;
    const [activeSkills, setActiveSkills] = useState(['Projektmanagement']);
    const [selectedSkills, setSelectedSkills] = useState(['Projektmanagement']);
    const [skills, setSkills] = useState(['Klassich', 'Hauptskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill', 'Subskill']);

    return (
        <HeaderWrapper scrollY={scrollY}>
            <div className={`${styles.projectWrapper}`}>
                {selectedSkills.map((selectedSkill, index) =>
                    <button className={`text-neutral-white ${styles.projectButton} bg-neutral-black`}>
                        <h6 className={`${styles.projectButtonText}`}>{selectedSkill}</h6>
                        <IoCloseCircleOutline className={`${styles.projectButtonIcon}`} />
                    </button>
                )}
            </div>
            <div className={`${styles.projectWrapper} hover:overflow-y-auto`}>
                {skills.map((skill, index) =>
                    <button className={`text-neutral-black ${styles.projectSkillButton} bg-neutral-white border-neutral-black`}>
                        <h6 className={`${styles.projectSkillButtonText}`}>{skill}</h6>
                    </button>
                )}
            </div>
            <NavLink to='/' className={`${styles.projectBack} border-neutral-white`}>
                <IoArrowBack className={`${styles.projectBackIcon} text-neutral-white`} />
            </NavLink>
        </HeaderWrapper>
    )
}

export default ProjectHeader;