import { request } from "@/services/main.service";

const getServiceEk = (id) =>
  request({ url: `servicesEk/${id}`, method: "get" });

const getAllServicesEk = () => request({ url: `servicesEk/`, method: "get" });

const getSimilarServicesEk = (id) =>
  request({ url: `servicesek/similar/${id}`, method: "get" });

export { getServiceEk, getAllServicesEk, getSimilarServicesEk };
