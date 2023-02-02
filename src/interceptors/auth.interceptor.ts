import { clientAuth } from "@/config/clientAxios";
import localStorageHandle from "@/utils/localStorage.handle";

clientAuth.interceptors.request.use(
    (config) => {
        if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${localStorageHandle.getItem("token")}`
        }
        return config
    },
    (error) => {
        throw new Error(error)
    }
)