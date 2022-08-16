import { gql, useQuery } from "@apollo/client";

const useGetFilterExperts = skill => {
    const expertFilterQuery = gql`
    query {
        Expert(filter: {skills: {MainSkills_id: {skillName: {_eq: "${skill}"}}}}) {
            username
            firstName
            lastName
            profileImage {
                id
            }
            yearsOfExperience
            skills {
                id
                MainSkills_id {
                    id
                    skillName
                }
            }
        }
       }`
  const { data, loading, error } = useQuery(expertFilterQuery);
  console.log("data 1", data);
  return {
    _data: data?.Expert,
    _loading: loading,
    _error: error,
  };
};
export default useGetFilterExperts;
