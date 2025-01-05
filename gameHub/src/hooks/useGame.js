import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/games");

const useGame = (slug) => useQuery({
    queryKey: ["game", slug],
    queryFn: ()=> apiClient.get(slug),

})
export default useGame;