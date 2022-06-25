import axios from "axios";
import authHeader from "./auth-header";
const API_URL_TEST = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL_TEST + "all");
};
const getUserBoard = () => {
  return axios.get(API_URL_TEST + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL_TEST + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL_TEST + "admin", { headers: authHeader() });
};
const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
export default UserService;