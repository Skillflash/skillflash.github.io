import {useQuery} from '@apollo/client';

import {eventsQuery} from '../../utils/queries';

export default () => {
  const {data, loading, error} = useQuery(eventsQuery);
  return {
    data: data?.Event,
    loading,
    error,
  };
};
