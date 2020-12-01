import axios from 'axios';

const LOGIN_API_REST_URL = 'http://localhost:8080';

class APIService {
    getLogin(){
        return axios.get(LOGIN_API_REST_URL);
    }
}

export default new APIService();