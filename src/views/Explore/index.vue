<template>
    <div class="block w-full primary-clr-mb lg:primary-clr dashboard overflow-scroll">
        <main class="h-full p-7 w-full">
                <formSearch @emitSearch="searchData" />
                <div class="dashboard-section mt-14" v-if="videos.length > 0">
                    <div class="dashboard-section_title mb-6 text-base font-[Montserrat-Bold]">Youtube Recently</div>
                    <div class="sources flex flex-wrap gap-[23px]">
                        <youtubeItem v-for="(video, index) in videos" :video="video" @clickVideo="actionVideo" />
                    </div>
                </div>

                <div class="dashboard-section mt-14" v-if="videoForChannel.length > 0">
                    <div class="dashboard-section_title mb-6 text-base font-[Montserrat-Bold]">Videos from channel</div>
                    <div class="sources flex flex-wrap gap-[23px] grids">
                        <youtubeItem v-for="(video, index) in videoForChannel" :video="video" @clickVideo="actionVideo" />
                    </div>
                </div>

                <!-- <div class="dashboard-section">
                    <div class="dashboard-section_title">Sportify Recently</div>
                    <div class="sources">
                        <div class="sources_item" v-for="(video, index) in sportify">
                            <div class="picture">
                                <img :src="video.album.images[0].url" alt="">
                            </div>
                            <div class="title" v-html="video.name"></div>
                        </div>
                    </div>
                </div> -->

        </main>
    </div>
</template>

<script lang="ts" setup>

import { ref, onBeforeMount, getCurrentInstance, watch } from "vue"
import axios from "axios"

import formSearch from "@/components/formSearch.vue"
import youtubeItem from "@/components/youtubeItem.vue"
import sidebarRight from "@/components/sidebarRight.vue"

import { useYoutubeStore } from "@/stores/youtube"
const store = useYoutubeStore();
const { setVideoChannel, videoChannel } = store;


let instance:any  = getCurrentInstance();
let services = instance.proxy.service;

let videos = ref<any>([]);
let sportify = ref<any>([]);
let dataSearch = ref<string>('');
let accessToken = ref<string>('');
let videoId = ref<string>('');
let videoForChannel = ref<any>([])

const searchData = (data) => {
    dataSearch.value = data;
    getYoutube();
    getSportify();
}

const getYoutube = async() => {
    videos.value = [];

    let params = {
        key: dataSearch.value,
        limit: 10
    };
    
    let res =  await services.youtube().searchYoutube(params);
    videos.value = res.data.data.items;
}

const getAccessToken = async () => {
    let res = await services.sportify().getAccessToken();
    accessToken.value = res.data.access_token;
}

const getSportify = async () => {
    let params = {
        key: dataSearch.value ? dataSearch.value : 'english' ,
        token: accessToken.value
    };
    let res = await axios.post(
        'http://localhost:8000/api/searchSportify',
        params,
        {
            headers: {}
        }
    );
    sportify.value = res.data.data.tracks.items;
}

const actionVideo = async (video) => {
    videoId.value = video.id.videoId
}

onBeforeMount(async () => {
    // await getAccessToken();
})

watch(store, (newStore) => {
    // console.log(newStore.videoChannel);
    // videoForChannel.value = newStore.videoChannel;
})



</script>

<style lang="scss">
.sources {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 246px;
    grid-gap: 20px;
}
</style>
