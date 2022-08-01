import {useQuery} from '@apollo/client';

import {expertsQuery} from '../../utils/queries';

export default () => {
  const {data, loading, error} = useQuery(expertsQuery);
  return {
    data: data?.Skills,
    loading,
    error,
  };
};
