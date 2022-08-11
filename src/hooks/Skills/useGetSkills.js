import {useQuery} from '@apollo/client';

import {skillsQuery} from '../../utils/queries';

const useGetSkills = () => {
  const {data, loading, error} = useQuery(skillsQuery);
  return {
    data: data?.MainSkills,
    loading,
    error,
  };
};
export default useGetSkills;

