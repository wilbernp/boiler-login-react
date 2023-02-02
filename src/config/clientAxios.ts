import axios from "axios";

export const clientAuth =  axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}`
})

export const clientPublic = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}`
})

