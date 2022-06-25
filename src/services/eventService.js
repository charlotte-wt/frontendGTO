
import http from "../http-common";

const API_URL = "http://localhost:8080/api";

const getAll = () => {
    return http.get("/events")   
  
};

const get = id => {
    return http.get(`/events/${id}`);
};
const create = data => {
    return http.post("/events", data);
};
const update = (id, data) => {
    return http.put(`/events/${id}`, data);
};
const remove = id => {
    return http.delete(`/events/${id}`);
};

const findByTitle = title => {
    return http.get(`/events/?title=${title}`);
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