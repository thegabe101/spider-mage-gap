import http from "../http-common";

const getAll = () => {
  return http.get("/mages");
};

const get = id => {
  return http.get(`/tutorials/${id}`);
};

const create = data => {
  return http.post("/mages", data);
};


const MageService = {
  getAll,
  get,
  create,

};

export default MageService;