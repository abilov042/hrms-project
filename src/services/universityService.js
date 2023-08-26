import axios from "axios";

export class UniversityService{

    getAllUniversities(){

        return axios.get("http://localhost:8080/api/universities/getAll")
    }
}