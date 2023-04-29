import axios from "../axios"

const api = () => {
    return {
        async createUrl() {
            return await axios.get("/auth/google");
        },
        async authGoogle(params:object) {
            return await axios.post("/authenticate", params);
        },
        async getUserinfo(params:object) {
            return await axios.post("/getUserinfo", params);
        },
        async createUser(params:object) {
            return await axios.post("/user/create", params);
        },
        async checkAuth(params:object) {
            return await axios.post("/check/auth", params);
        }
    }
}

export default api;