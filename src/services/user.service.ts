import { clientAuth } from "@/config/clientAxios"

export default {
    getProfile:() => {
        return clientAuth.get("api/profile")
    }
}