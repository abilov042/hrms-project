import axios from "axios";

export class CandidateCVService{
    getcandidateCV(){

        return axios.get("http://localhost:8080/api/candidateCVs/getAll")
    }

    getById(id){

        return axios.get("http://localhost:8080/api/candidateCVs/getById?id="+id)
    }
}