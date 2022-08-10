import { useQuery } from "@apollo/client";

import { eventsQuery } from "../../utils/queries";

const useGetEvents = () => {
  const { data, loading, error } = useQuery(eventsQuery);
  return {
    data: data?.Event,
    loading,
    error,
  };
};

export default useGetEvents;
