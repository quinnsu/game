//import useData from "./useData";
import genres from "../data/genres";
// const useGenres = () => useData("/genres");
// genres改为static data，无需动态获取
const useGenres = () => ({data: genres, isLoading: false, error: null});
export default useGenres;
