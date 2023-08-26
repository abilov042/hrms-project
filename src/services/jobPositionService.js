import axios from "axios";

export class JobPositionService{

    getAllPosition(){

        return axios.get("http://localhost:8080/api/jobPosition/getall")
    }
}