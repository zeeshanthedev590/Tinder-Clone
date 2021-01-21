import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderclone007.herokuapp.com",
});

export default instance;
