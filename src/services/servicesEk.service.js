import {request} from "@/services/main.service";
const getServiceEk = id => request({url:`servicesEk/${id}`,method:"get"});
export {
    getServiceEk
}