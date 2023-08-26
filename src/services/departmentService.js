import axios from "axios";

export class DepartmentService{

    getAllDepartment(){

        return axios.get("http://localhost:8080/api/departments/getall")
    }
}