
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api";


const getAll = () => {
    return axios.get(API_URL  + "/events" , { headers: authHeader() })   
  
};

const get = id => {
    return axios.get(API_URL + `/events/${id}`,  { headers: authHeader() });
};
const create = data => {
    return axios.post(API_URL + "/events", data,  { headers: authHeader() });
};
const update = (id, data) => {
    return axios.put(API_URL + `/events/${id}`, data , { headers: authHeader() });
};
const remove = id => {
    return axios.delete(API_URL + `/events/${id}` , { headers: authHeader() });
};

const findByTitle = title => {
    return axios.get(API_URL + `/events/?title=${title}` , { headers: authHeader() });
};
const eventService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByTitle
};
export default eventService;