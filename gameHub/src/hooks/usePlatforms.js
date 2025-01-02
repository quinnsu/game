import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";

//const usePlatforms = () => useData("/platforms/lists/parents");
const apiClient = new APIClient("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: platforms ,
  });
export default usePlatforms;
