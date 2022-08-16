import { gql, useQuery } from "@apollo/client";

const useGetEvents = skill => {
  const eventFilterQuery = gql `query {
    Event(filter: {skills: {MainSkills_id: {skillName: {_eq: "${skill}"}}}}) {
        name
        startDate
        description
        eventImage {
          id
        }
        author {
          profileImage {
              id
          }
        } 
        skills {
            id
            MainSkills_id {
                id
                skillName
            }
        }
    }
   }`
  const { data, loading, error } = useQuery(eventFilterQuery);
  return {
    data: data?.Event,
    loading,
    error,
  };
};

export default useGetEvents;
