import axios from "axios";

export class CandidatePhotoService{

    getCandidateFoto(id){

        return axios.get("http://localhost:8080/api/candidateProfilePhotoControllers/getByCandidateId?id="+id)
    }

    getAllPhoto(){

        return axios.get("http://localhost:8080/api/candidateProfilePhotoControllers/getAll")
    }
}