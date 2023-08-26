import axios from "axios";

export class LevelLanguageService{

    getAllLevel(){

        return axios.get("http://localhost:8080/api/levelLanguage/getall")
    }
}