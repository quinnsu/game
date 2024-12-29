import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
const useGames = () => {
     const [games, setGames] = useState([]);
        const [error, setError] = useState();
    
        useEffect(() => {
            const controller = new AbortController();
            apiClient.get('/games')
            .then((response) => {
                setGames(response.data.results)
            })
            .catch((error) => {
                if(error instanceof CanceledError) return;
                setError(error.message)})
            
            return () => controller.abort();
        },[])

    return { games, error }
}
export default useGames;