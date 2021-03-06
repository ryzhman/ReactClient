import axios from 'axios';

const SERVER_URL = "localhost:8080";
const SERVER_API = `http://${SERVER_URL}/api`;

class EmployeeDataService {
    static fetchAllEmployeesData() {
        return axios.get(`${SERVER_API}/employees`);
    }

}

export default EmployeeDataService;