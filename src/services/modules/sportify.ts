import { def } from "@vue/shared"
import axios from "../axios"

const api = () => {
    return {
        async getAccessToken() {
            return await axios.get("/getAccessTokenSportify");
        } 
    }
}

export default api;