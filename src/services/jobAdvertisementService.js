import axios from "axios"


export default class JobAdvertisementService{
    getAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByIsActive?isActive=true")
    }
}