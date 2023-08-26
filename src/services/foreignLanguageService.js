import axios from "axios";

export class ForeignLanguageService{

    getAllLanguage(){

        return axios.get("http://localhost:8080/api/foreignLanguage/getall")
    }
}