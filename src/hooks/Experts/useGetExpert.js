import { gql, useQuery } from "@apollo/client";

const useGetExpert = username => {
    const expertFilterQuery = gql`
    query {
        Expert(filter: {username: {_eq: "${username}"}}) {
            username
            profileImage {
                id
            }
            firstName
            lastName
            shortBio
            yearsOfExperience
            description
            email
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
  return {
    data: data?.Expert[0],
    loading: loading,
    error: error,
  };
};

export default useGetExpert;
