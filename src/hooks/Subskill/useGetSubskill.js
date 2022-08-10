import {useQuery} from '@apollo/client';

import {subskillQuery} from '../../utils/queries';

export default () => {
  const {data, loading, error} = useQuery(subskillQuery);
  return {
    data: data?.SubSkill,
    loading,
    error,
  };
};