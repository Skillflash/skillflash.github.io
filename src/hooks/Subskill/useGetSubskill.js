import {useQuery} from '@apollo/client';

import {subskillQuery} from '../../utils/queries';

const useGetSubskill = () => {
  const {data, loading, error} = useQuery(subskillQuery);
  console.log("data 1", data);
  return {
    data: data?.SubSkill,
    loading,
    error,
  };
};
export default useGetSubskill;
