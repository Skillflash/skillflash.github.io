import React, { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

import { Error, EventCard, ExpertCardInn, Loading, LoadingIndicator } from '../../components';


import theme from '../../resources/theme/theme';
import styles from './Projects.module.css';

const Projects = props => {
    const { teams, events, experts } = props;

    const { data, loading, error } = events;
    const { _data, _loading, _error } = experts;

    const [filters, setFilters] = useState([
        { name: 'Expert:inn', value: 'expert:inn', color:'bg-primary-blue' },
        { name: 'Events', value: 'events', color:'bg-primary-lila' },
        { name: 'Artikel', value: 'artikel', color:'bg-primary-orange' },
        { name: 'Audio/Video', value: 'audio/video', color:'bg-secondary-rosa' },
        { name: 'Teams', value: 'temas', color:'bg-secondary-pink' }
    ]);
    const _filters = [
        { name: 'Expert:inn', value: 'expert:inn', color:'bg-primary-blue' },
        { name: 'Events', value: 'events', color:'bg-primary-lila' },
        { name: 'Artikel', value: 'artikel', color:'bg-primary-orange' },
        { name: 'Audio/Video', value: 'audio/video', color:'bg-secondary-rosa' },
        { name: 'Teams', value: 'temas', color:'bg-secondary-pink' },
    ]

    const SetFilters = data => {
        let _filters = [...filters];
        let filterIndex = _filters.findIndex(f => f.name === data.name);
        if (filterIndex < 0) {
            _filters.push(data);
        }
        else {
            _filters.splice(filterIndex, 1);
        }
        setFilters([..._filters]);
    }

    if (error || _error) {
        return (
          <section className={`${styles.mainWrapper} bg-neutral-white`}>
            <Error />
          </section>
        )
      }
    
      if (loading || _loading) {
        return (
          <section className={`${styles.mainWrapper} bg-neutral-white`}>
              <Loading />
          </section>
        )
      }


    return (
        <section className={`${styles.mainWrapper} bg-neutral-white`}>
            <div className={`${styles.skillsButtonFilters}`}>
                {_filters.map((filter, index) => 
                    <button
                        key={index}
                        onClick={() => SetFilters(filter)}
                        className={`
                        text-neutral-white
                        ${styles.skillsButton} 
                        ${filter.color}
                        ${filters.findIndex(f => f.name === filter.name) <= -1 && 'bg-opacity-40'}
                        `}
                    >
                        <h6 className={`${styles.skillsButtonText}`}>{filter.name}</h6>
                        {filters.findIndex(f => f.name === filter.name) >= 0 && <IoCloseCircle className={`${styles.skillsButtonIcon}`} />}
                    </button>
                )}
            </div>
            {loading || _loading ? 
                <div className='mt-40'>
                    <LoadingIndicator size={2} color={theme.PRIMARY_ORANGE} />
                </div>
            :
                <div className={`${styles.skillsCards}`}>
                {_data.map((datum, index) => <ExpertCardInn key={index} expert={datum} skillcolor = 'blue'  />)}
                {/* <AudioCard /> */}
                {data.map((datum, index) => <EventCard key={index} event={datum} />)}
                {/* <TeamCard team={data[0]} /> */}
                {/* <ArticleCard />
                <EventCard />
                <AudioCard /> */}
                {/* <TeamCard team={data[1]} /> */}
            </div>}
        </section>
    )
}

export default Projects;