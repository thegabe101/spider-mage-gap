import axios from "axios";

const URL_PREFIX = "http://api:8080/";

export default axios.create({
  baseURL: `/api2` + URL_PREFIX,
  headers: {
    "Content-type": "application/json"
  }
});