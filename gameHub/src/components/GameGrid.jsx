import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

const GameGrid = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        apiClient.get('/games')
        .then((response) => {
            setGames(response.data.results)
        })
        .catch((error) => {
            setError(error.message)
        })  
    })
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {games.map((game) => (
            <li key={game.id}>{game.name}</li>
        ))}
    </ul>
    </>
  )
}

export default GameGrid
