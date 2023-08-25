import axios from "axios";

export class CandidateService{
    getCandidate(){

        return axios.get("http://localhost:8080/api/candidates/getAll")
    }

    postCandidate(candidate){

        return axios.post("http://localhost:8080/api/candidates/save",candidate)
    }
}