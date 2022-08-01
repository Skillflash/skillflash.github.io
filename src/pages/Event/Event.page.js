import React from 'react';

import { TopNavBar } from '../../components';
import { EventDetailHeader, EventDetails } from '../../sections';

const Event = props => {
    const { scrollY } = props;
    return (
        <section>
            <TopNavBar scrollY={scrollY} />
            <EventDetailHeader />
            <EventDetails />
        </section>
    )
}

export default Event;