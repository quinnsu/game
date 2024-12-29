
import axios from 'axios';

export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: 'e2757348b2e44e74b9d7b0af65fef8fe'
        }

    }
)