//import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
// const useGenres = () => useData("/genres");
// genres初次加载为static data，无需动态获取

const apiClient = new APIClient("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData:{ count: genres.length, results: genres }, 
  });
export default useGenres;
