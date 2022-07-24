import axios from "axios";
const instance = axios.create({
  baseURL: "https://tinder-back-end-server.herokuapp.com",
});
export default instance;
