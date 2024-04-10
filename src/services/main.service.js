import axios from "axios"

const API_URL = 'http://192.168.3.22:3000'
export const request = async ({url,method,data= {}}) =>{
    const response = await axios[method](`${API_URL}/${url}`,data)
    return response.data
}