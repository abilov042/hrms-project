import axios from "axios";

export class RemoteOrOnsideService{

    getAll(){

        return axios.get("http://localhost:8080/api/remoteOrOnside/getall")
    }
}