import React from "react";
import { useParams } from "react-router-dom";
import { useGetEvents, useGetExperts } from "../../hooks";

import { TopNavBar } from "../../components";
import { EventDetailHeader, EventDetails } from "../../sections";
import useGetEventDetails from "../../hooks/Events/useGetEventDetails";

const Event = (props) => {
  let params = useParams();

  let eventDetail = useGetEventDetails(params);
  console.log("eventdetail here", eventDetail);

  const { scrollY } = props;

  return (
    <section>
      <TopNavBar scrollY={scrollY} />
      <EventDetailHeader expert={eventDetail} />
      <EventDetails event={eventDetail} />
    </section>
  );
};

export default Event;
