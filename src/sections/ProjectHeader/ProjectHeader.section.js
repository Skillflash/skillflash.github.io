import React, { useEffect, useState } from 'react';
import { IoArrowBack, IoCloseCircleOutline } from 'react-icons/io5';
import { NavLink, useParams } from 'react-router-dom';

import styles from './ProjectHeader.module.css';
import { HeaderWrapper, LoadingIndicator } from '../../components';
import { FiFilter } from 'react-icons/fi';
import theme from '../../resources/theme/theme';

const ProjectHeader = props => {
    const { scrollY, projectSkills } = props;

    const { data, loading, error } = projectSkills;

    let params = useParams();
    const [activeSkill, setActiveSkill] = useState(true);
    const [activeSkills, setActiveSkills] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [skills, setSkills] = useState([]);
    const [range, setRange] = useState(20);


    useEffect(() => {
        if (!loading) {
            setSkills([...data.subskills]);
        }
    }, [data, loading]);


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

    const SetActiveSkills = data => {
        let _skills = [...activeSkills];
        let skillsIndex = _skills.findIndex(s => s.SubSkill_id.name === data.SubSkill_id.name);
        if (skillsIndex < 0) {
            _skills.push(data);
        } else {
            _skills.splice(skillsIndex, 1);
        }
        setActiveSkills([..._skills])
    }

    const SetSelectedSkills = data => {
        let _skills = [...selectedSkills];
        let skillsIndex = _skills.findIndex(s => s.SubSkill_id.name === data.SubSkill_id.name);
        let _allSkills = [...skills];
        let removeIndex = _allSkills.findIndex(a => a.SubSkill_id.name === data.SubSkill_id.name)
        if (skillsIndex < 0) {
            _skills.unshift(data);
        } else {
            _skills.splice(skillsIndex, 1);
        }
        if (removeIndex < 0) {
            _allSkills.unshift(data)
        } else {
            _allSkills.splice(removeIndex, 1);
        }
        setSkills([..._allSkills]);
        setSelectedSkills([..._skills])
    }

    const RemoveSelectedSkill = data => {
        let _allSkills = [...skills];
        let removeIndex = _allSkills.findIndex(a => a === data);
    }

    const SetSelectedActiveSkills = (data, event) => {
        SetSelectedSkills(data);
        SetActiveSkills(data);
        event.stopPropagation()
    }

    return (
        <HeaderWrapper scrollY={scrollY}>
                <div className={`${styles.projectWrapper}`}>
                    {selectedSkills.length >= 1 && selectedSkills.map((selectedSkill, index) =>
                        <button
                            onClick={() => SetActiveSkills(selectedSkill)}
                            key={index}
                            className={`
                            text-neutral-black
                            border-neutral-black
                            ${styles.projectButtonSelected}
                            ${activeSkills.findIndex(a => a === selectedSkill) === -1 && 'bg-opacity-70'}
                            bg-neutral-white`}
                        >
                            <h6 className={`${styles.projectButtonText}`}>{selectedSkill.SubSkill_id.name}</h6>
                            <IoCloseCircleOutline onClick={(event) => SetSelectedActiveSkills(selectedSkill, event)} className={`${styles.projectButtonIcon}`} />
                        </button>
                    )}
                    <button
                        onClick={(event) => setActiveSkill(!activeSkill)}
                        className={`
                        mx-auto
                        text-neutral-white
                        ${styles.projectButton}
                        ${!activeSkill && 'bg-opacity-70'}
                        bg-neutral-black`}
                        >
                            <h6 className={`${styles.projectButtonText}`}>{params.project}</h6>
                            <IoCloseCircleOutline className={`${styles.projectButtonIcon}`} />
                        </button>
                </div>
                {loading ?
                    <LoadingIndicator size={1} color={theme.NEUTRAL_WHITE} />
                    :
                    error ? <h2 className={`${styles.subTitle} from-neutral-white to-neutral-grey-light`}>Sorry, an error occured</h2> :
                    <div className={`${styles.projectSkillsWrapper}`}>
                        {skills.map((skill, index) =>
                            <button
                                key={index}
                                onClick={event => SetSelectedActiveSkills(skill,event)}
                                className={`text-neutral-black ${styles.projectSkillButton} bg-neutral-white border-neutral-black`}
                            >
                                <h6 className={`${styles.projectSkillButtonText}`}>{skill.SubSkill_id && skill.SubSkill_id.name}</h6>
                            </button>
                        )}
                    </div>
                }
                <button className={`${styles.headerButton} ${scrollY >= 200 && styles.headerButtonFixed}`}>
                    <h6 className={`${styles.headerButtonText} ${scrollY >= 200 ? `from-secondary-pink to-secondary-yellow` : 'from-neutral-white to-neutral-white'}`}>Suche konfigurieren</h6>
                    <FiFilter className={`${styles.headerButtonIcon} ${scrollY >= 200 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                </button>
                <div className={styles.projectBackWrapper}>
                    <NavLink to='/' className={`${styles.projectBack} ${scrollY >= 200 ? 'border-primary-orange' : 'border-neutral-white'}`}>
                        <IoArrowBack className={`${styles.projectBackIcon} ${scrollY >= 200 ? 'text-primary-orange' : 'text-neutral-white'}`} />
                    </NavLink>
                </div>
        </HeaderWrapper>
    )
}

export default ProjectHeader;