import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

const useTrailers = (gameId) => {
  const apiClient = new APIClient(
    `/games/${gameId}/movies`
  );

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
