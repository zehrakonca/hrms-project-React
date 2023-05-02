import axios from "axios";

export default class ImageService{

     getAllLanguageInfo(){
        return axios.get(`hhttp://localhost:8080/api/images/getAll`);
    }

    getById(id){
        return axios.get(`http://localhost:8080/api/images/getById?id=${id}`);
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get(`http://localhost:8080/api/images/getByUserId?id=${jobSeekerId}`);
    }

    addImage(userId, fileUrl){
        return axios.post(`http://localhost:8080/api/images/add?url=${fileUrl}&user=${userId}`);
    }

    updateImage(languageInfo){
        // return axios.put(`http://localhost:8080/api/languageInfos/update`, languageInfo);
    }

    deleteImage(id){
        return axios.delete(`http://localhost:8080/api/images/delete?id=${id}`);
    }
}