import {useQuery} from '@apollo/client';

import {teamsQuery} from '../../utils/queries';

export default () => {
  const {data, loading, error} = useQuery(teamsQuery);
  return {
    data: data?.Team,
    loading,
    error,
  };
};
