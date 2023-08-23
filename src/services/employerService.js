import axios from "axios";

export class EmployerService{
    postEmployer(employer){

        return axios.post("http://localhost:8080/api/employer/getAll", employer);
    }
}