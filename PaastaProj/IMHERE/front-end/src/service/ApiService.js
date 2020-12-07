import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080";

class ApiService {
    addLocations(){
        return axios.post(USER_API_BASE_URL+'/locations');
    }

}