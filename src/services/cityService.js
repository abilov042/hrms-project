import axios from "axios";

export class CityService{

    getAllCity(){
        
      return axios.get("http://localhost:8080/api/city/getAll")
    }
}