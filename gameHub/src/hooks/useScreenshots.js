import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

const useScreenshots = (gameId) => {
  const apiClient = new APIClient(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
