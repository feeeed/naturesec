import {request} from "@/services/main.service";
const getServiceEk = id => request({url:`servicesEk/${id}`,method:"get"});
const getAllServicesEk = () => request({url:`servicesEk/`,method:"get"});
export {
    getServiceEk,
    getAllServicesEk,
}