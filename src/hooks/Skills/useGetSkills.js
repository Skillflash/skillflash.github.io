import {useQuery} from '@apollo/client';

import {skillsQuery} from '../../utils/queries';

export default () => {
  const {data, loading, error} = useQuery(skillsQuery);
  return {
    data: data?.Skills,
    loading,
    error,
  };
};
