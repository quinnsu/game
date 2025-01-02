
import axios from 'axios';
const axiosInstance = axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: 'e2757348b2e44e74b9d7b0af65fef8fe'
        }

    }
)

class APIClient{
    endpoint = '';

    constructor(endpoint){
        this.endpoint = endpoint;
    }   

    getAll = ( config ) =>{
        return axiosInstance
        .get(this.endpoint, config)
        .then((res) => res.data);
    }
}

export default APIClient;