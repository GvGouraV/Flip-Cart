import axios from "axios";

const baseURL = "http://localhost:2410";


function get(url){
    
     return axios.get(baseURL + url);

}

function post(url, obj) {
    return axios.post(baseURL + url, obj)
} 
function deleteApi(url){
    return axios.delete(baseURL+url)
}
function put(url,obj){
    return axios.put(baseURL+url,obj)
}

export default{
    get,
    post,
    deleteApi,
    put,
};