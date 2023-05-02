import axios from "axios"


export default class JobAdvertisementService{
    getActiveAdvertisements(){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getByIsActive?isActive=true`)
    }

    getAllAdvertisements(){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getAll`);
    }

    getByAdvertisementName(advertisementName){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getByAdvertisementName?advertisementName=`+advertisementName);
    }

    getByCityAndWorkType(cityId, workTypeId){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getByCityAndWorkType?cityId=${cityId}&workTypeId=${workTypeId}`);
    }
    
    getByAdvertisementId(advertisementId){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getById/{id}?id=${advertisementId}`);
    }

    getByAdvertisementIsFalse(){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getByIsActive?isActive=false`);
    }

    getByAdvertisementDetailSorted(){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getByJobAdvertisementDetailSorted`);
    }

    getDetailsSortedByEmployerId(employerId){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getDetailsSortedByEmployerId?employerId=${employerId}`);
    }

    addAdvertisement(jobAdvertisement){
        return axios.post(`http://localhost:8080/api/jobAdvertisements/add"`,jobAdvertisement);
    }

    makeActiveOrPassive(id, isActive) {
        return axios.put(`http://localhost:8080/api/jobAdvertisements/makeActiveOrPassive?id=${id}&isActive=${isActive}`)
    }

    deleteAdvertisement(id){
        return axios.delete(`http://localhost:8080/api/jobAdvertisements/delete?id=${id}`);
    }

    updateAdvertisement(jobAdvertisement) {
        return axios.put(`http://localhost:8080/api/jobAdvertisements/update`,jobAdvertisement);
    }

}