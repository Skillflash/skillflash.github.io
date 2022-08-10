import { useQuery } from "@apollo/client";

import { eventsQuery } from "../../utils/queries";

import { gql } from "graphql-tag";

const useGetEventDetails = (props) => {
  const eventQueryFilter = gql`
    query {
      Event (filter: { name: { _eq: "${props?.event}" } }) {
            id
            description
            name
            startDate
            endDate
            skills {
              id
            }
            eventImage {
              id
              width
              height
              title
              filename_disk
              type
              description
            }
          author {
             firstName
             lastName
             id
             shortBio
             description
             profileImage{
                 width
                 height
                 id
                 type
             }
         }
    }}
          

  `;
  const { data, loading, error } = useQuery(eventQueryFilter);

  console.log("data 2", data);
  return {
    data: data?.Event,
    loading,
    error,
  };
};

export default useGetEventDetails;
