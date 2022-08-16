import {gql, useQuery} from '@apollo/client';


const useGetSkill = skill => {
    const subSkillQueryFilter = gql `
    query {
      MainSkills(filter: {skillName: {_eq: "${skill}"}}) {
          skillName
          description
          subskills {
             id
             SubSkill_id {
                 name
             }
         }
      }
     }
    `
  const {data, loading, error} = useQuery(subSkillQueryFilter);
  return {
    data: data?.MainSkills[0],
    loading,
    error,
  };
};
export default useGetSkill;

