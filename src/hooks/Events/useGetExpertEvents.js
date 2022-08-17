import { gql, useQuery } from "@apollo/client";

const useGetExpertEvents = username => {
  const eventFilterQuery = gql `query {
    Event(filter: {author: {username: {_eq: "${username}"}}}) {
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
    _data: data?.Event,
    _loading: loading,
    _error: error,
  };
};

export default useGetExpertEvents;
