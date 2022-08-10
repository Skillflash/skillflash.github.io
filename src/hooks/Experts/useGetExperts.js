import { useQuery } from "@apollo/client";

import { expertsQuery } from "../../utils/queries";
const useGetExperts = () => {
  const { data, loading, error } = useQuery(expertsQuery);
  console.log("data 1", data);
  return {
    data: data?.Expert,
    loading,
    error,
  };
};
export default useGetExperts;
