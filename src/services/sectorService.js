import axios from "axios"

export default class SectorService{
    getSectors(){
        return axios.get("http://localhost:8080/api/sectors");
    }
}