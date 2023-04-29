import { def } from "@vue/shared"
import axios from "../axios"

const api = () => {
    return {
        async searchYoutube(params) {
            return await axios.post(
                "/searchYoutube",
                params
            );
        },
        // async getChannelById() {
        //     return await axios.post("/searchListChannelYoutube");
        // },
        async getPlaylistChannel(param) {
            console.log(param, '123');
            return await axios.post("/getPLaylistChannel", param,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
            );
        },
        async getChannelById(param) {
            return await axios.post("/getChannelById", param,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
            );
        }
    }
    // getChannelById
}

export default api;