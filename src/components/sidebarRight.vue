<template>
    <div class="bg-white rounded-lg p-3 relative">
        <div class="my-4">
            <h1 class="text-black text-base font-bold mb-3 font-[Montserrat-Bold]">Top Channels</h1>
            <div class="grid grid-cols-3 gap-4">
                <div class="cursor-pointer" v-for="item in topChannels" @click="getPlaylistChannel(item.id)">
                    <img class="w-full rounded-2xl border-[2px] border-gray-500 border-solid" :src="item.thumbnails.high.url" alt="">
                    <p class="text-center text-xs  mt-2 font-[Montserrat-SemiBold] limit-two-line">{{ item.name }}</p>
                </div>
            </div>
        </div>
        <playerYoutube class="rounded-2xl p-5 absolute bottom-5 w-[93%]" />
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch, onMounted, getCurrentInstance, onBeforeMount } from "vue"
import playerYoutube from "@/components/playerYoutube.vue"
import { useYoutubeStore } from "@/stores/youtube"
import { usePlatformStore } from "@/stores/platform"

const store = useYoutubeStore();
const { setVideoChannel, resetVideoChannel } = store;
const storePlatform = usePlatformStore();

let instance:any  = getCurrentInstance();
let services = instance.proxy.service;

const topChannels:any = ref([]);
let videosChannel:any = ref([]);

const getChannelsTop = async () => {
    let listChannel:any = [];
    let res = await services.youtube().getChannelById();
    res.data.data.items.forEach((element) => {
        topChannels.value.push({
            thumbnails: element.snippet.thumbnails,
            name: element.snippet.title,
            id: element.id
        });
    });

    console.log(topChannels.value);
}

const getPlaylistChannel = async (id:string) => {
    resetVideoChannel();
    console.log(id, 'idddd');
    let params = {
        channelId: id
    };
    let res = await services.youtube().getPlaylistChannel(params);
    videosChannel.value = res.data.data.items;
    console.log(res);
    setVideoChannel(res.data.data.items);
}
onBeforeMount(async () => {
    await getChannelsTop();
})

</script>