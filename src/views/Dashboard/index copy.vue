<template>
    <div class="block w-full primary-clr-mb lg:primary-clr dashboard overflow-scroll">
       <main class="h-full p-7 w-full">

            <formSearch @emitSearch="searchData" />
            <h2 class="dashboard-title">Good morning, <br> Jennifer</h2>
            <p class="dashboard-description">Open the panel and watch your progress and <br> Growth in knowledge!</p>

            <button class="dashboard-explore">Explore more</button>

            <div class="dashboard-section">
                <div class="analyst flex-wrap">.
                    <div class="analyst-item gradient-style-1">
                        <img src="@/assets/images/giraffe.png" alt="">
                        <div class="infor">
                            <h2>Vocabulary</h2>
                            <p>51 Words</p>
                        </div>
                    </div>
                    <div class="analyst-item gradient-style-3 ">
                        <img src="@/assets/images/fish.png" alt="">
                        <div class="infor">
                            <h2>My channel</h2>
                            <p>10 Channels</p>
                        </div>
                    </div>
                    <div class="analyst-item gradient-style-4">
                        <img src="@/assets/images/wolf.png" alt="">
                        <div class="infor">
                            <h2>Watch</h2>
                            <p>17 Videos</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="dashboard-section">
                <div class="dashboard-section_title">Youtube Recently</div>
                <div class="sources">
                    <youtubeItem v-for="(video, index) in videos" :video="video" />
                </div>
            </div>

            <div class="dashboard-section">
                <div class="dashboard-section_title">Sportify Recently</div>
                <div class="sources">
                    <div class="sources_item" v-for="(video, index) in sportify">
                        <div class="picture">
                            <img :src="video.album.images[0].url" alt="">
                        </div>
                        <div class="title" v-html="video.name"></div>
                    </div>
                </div>
            </div>


            <div class="dashboard-section">
                <div class="dashboard-section_title">Schedule Today</div>
                <div class="plans">
                    <div class="plans-item" v-for="index in 4">
                        <div class="plans-item_index">
                            01
                        </div>
                        <div class="plans-item_content">
                            <h2>UX/UI Workshop</h2>
                            <p>10 of 45 chapters - Mrs. Wilson</p>
                        </div>
                        <div class="plans-item_times">
                            <iconTime class="w-4 h-4" />
                            <span>14:00 - 14:45</span>
                        </div>
                    </div>
                </div>
            </div>
       </main>
    </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, onMounted } from "vue"
import axios from "axios"
import iconTime from "@/components/icons/iconTime.vue"
import formSearch from "@/components/formSearch.vue"
import youtubeItem from "@/components/youtubeItem.vue"

let videos = ref<any>([]);
let sportify = ref<any>([]);
let accessToken = ref<string>('');

const dataSearch = ref('');

const searchData = (data) => {
    dataSearch.value = data;
    getYoutube();
    getSportify();
}
onMounted(async () => {
    
})

const getCallback = async () => {
    // let res = await axios.get('http://localhost:8000/api/auth/google/callback');
    // console.log(res, 'callback-google');
}
const getYoutube = async() => {
    let params = {
        key: dataSearch.value
    };
    let res = await axios.post(
        'http://localhost:8000/api/searchYoutube',
        params,
    );
    videos.value = res.data.data.items;
}

const getSportify = async () => {

    let params = {
        key: dataSearch.value ? dataSearch.value : 'english' ,
        token: accessToken.value,
    };
    let res = await axios.post(
        'http://localhost:8000/api/searchSportify',
        params,
    );
    
    sportify.value = res.data.data.tracks.items;
    console.log(sportify.value);

}
const getAccessToken = async () => {
    let res = await axios.get('http://localhost:8000/api/getAccessTokenSportify');
    console.log(res);
    accessToken.value = res.data.access_token;
    console.log(accessToken.value);
}
onBeforeMount(async () => {
    getYoutube();
    await getAccessToken();
    await getSportify();
    await getCallback();
})


</script>
<style lang="scss" scoped>
.form-search {
    &-input {
        &:focus-visible {
            outline: none;
        }
        @apply bg-transparent text-xs
        
    }
    @apply flex items-center gap-2
}
.dashboard {
    &-title {
        @apply font-[Montserrat-Bold] text-4xl mt-10
    }
    &-description {
        @apply font-[Montserrat-Regular] text-[11px] mt-3 text-[#000000b3]
    }
    &-explore {
        @apply text-white bg-orange-600 px-4 py-[6px] rounded-[4px] text-[12px] mt-4
    }
    &-section {
        &_title {
            @apply mb-6 text-base font-[Montserrat-Bold]
        }
        .sources {
            &_item {
                border: 1px solid #ccc;
                .picture {
                    img {
                        @apply w-full h-full rounded-xl object-cover
                    }
                    .icon_play {
                        
                        svg {
                            @apply text-orange-500
                        }
                        img {
                            @apply w-5 h-5
                        }
                        @apply bg-white rounded-lg absolute bottom-5 right-2 p-1
                    }
                    .btnYoutubeCustom { 
                        background: red;
                        /* border-radius: 50%/10%; */
                        color: #FFFFFF;
                        font-size: 0.7em;
                        height: 27px;
                        margin: 20px auto;
                        padding: 0;
                        position: relative;
                        text-align: center;
                        text-indent: 0.1em;
                        transition: all 150ms ease-out;
                        width: 29px;
                        position: absolute;
                        bottom: 8px;
                        right: 10px;
                        border-radius: 7px;
                        
                        &::after {  
                            border-style: solid;
                            border-width: 1em 0 1em 1.732em;
                            border-color: transparent transparent transparent rgb(255, 255, 255);
                            content: " ";
                            font-size: 0.75em;
                            height: 0;
                            margin: -1em 0 0 -0.75em;
                            top: 50%;
                            position: absolute;
                            width: 0;
                        }
                    }
                    @apply rounded-xl overflow-hidden h-[132px] relative
                }
                .title {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    min-height: 32px;
                    @apply text-xs font-[Montserrat-SemiBold] mt-2
                }
                .more {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    min-height: 32px;
                    @apply text-xs font-[Montserrat-Regular] mt-2
                }
                @apply w-full rounded-xl p-3 border-[1px] border-[#00000024] border-solid cursor-pointer bg-[#b6e1f1]
            }
            @apply grid grid-cols-2 md:grid-cols-3 gap-4
        }
        .plans {
            &-item {
                &_index {
                    @apply w-9 h-9 border-solid border-white border-2 rounded-full flex items-center justify-center text-base font-[Montserrat-Medium]
                }
                &_content {
                    h2 {
                        @apply font-[Montserrat-Medium] text-sm
                    }
                    p {
                        @apply text-xs text-gray-600
                    }
                }
                &_times {
                    span {
                        @apply text-sm font-bold
                    }
                    @apply ml-auto flex items-center justify-center gap-2
                }
                @apply flex gap-3 items-center mb-6
            }
        }
        .analyst {
            &-item {
                img {
                    @apply w-10 h-10
                }
                .infor {
                    h2 {
                        @apply font-[Montserrat-SemiBold] text-lg text-white
                    }
                    p {
                        @apply font-[Montserrat-Regular] text-xs text-white
                    }
                }
                &:first-child {
                    @apply w-full
                }
                @apply shadow-lg rounded-2xl w-[49%] md:w-full h-24 flex gap-3 items-center justify-center border-2 border-solid border-white 
            }
            @apply flex gap-2 
        }
        @apply mt-14
    }
    grid-template-columns: 65% 35%;;
}

</style>