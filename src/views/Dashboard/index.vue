<template>
   <div class="p-7 w-full md:max-w-[1200px] mx-auto flex">
        <div class="w-[300px] hidden md:block h-full"></div>
        <div class=" overflow-scroll w-full md:w-[600px]">
            <div class="carousel carousel-end rounded-box gap-3 w-full md:w-[25rem] m-auto sticky top-0 bg-white justify-center">
                <div class="carousel-item" v-for="item in 7">
                    <div class="text-black text-xs mt-2 text-center">
                        <div class="item_channel-logo w-[70px] h-[70px] rounded-full overflow-hidden p-[3px] cursor-pointer" style="background: linear-gradient(to right, red, purple);">
                            <img src="@/assets/images/avatar_1.jpeg" alt="Drink" class="border-[3px] border-white border-solid w-full h-full rounded-full" />
                        </div>
                        <div class="item_channel-name text-black text-xs mt-2 text-center">Im Mary</div>
                    </div>
                </div> 
            </div>

            <!-- <div class="grid grid-cols-3 gap-4 mt-10"
                <div class="w-full" v-for="item in 3">
                    <div class="w-full h-[150px] rounded-lg overflow-hidden">
                        <img src="@/assets/images/hq720.webp" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="flex gap-3 mt-4">
                        <img src="@/assets/images/avatar_1.jpeg" alt="" class="w-7 h-7 rounded-full">
                        <div class="">
                            <h2 class="text-base text-black font-bold">lofi hip hop radio ~ beats to relax/study/chill...</h2>
                            <p class="mt-2 text-sm">Tiệm Nhạc Xưa</p>
                        </div>
                    </div>
                </div>
            </div> -->


            <div class="mt-2">
                <youtubeItem :video="item" v-for="item in videos" v-if="videos.length > 0" />
                <div v-else>
                    <p class="border-[1px] border-red-600 border-solid px-3 py-1 rounded-md bg-white text-red-500 bg-red-200" v-html="messageError" v-if="messageError"></p>
                </div>
                <!-- <div class="w-full max-w-[440px] m-auto border-b-[1px] border-[#00000024] border-solid py-7  last:border-none" v-for="item in videos">
                    <div class="flex gap-3 items-center mb-3">
                        <div class="w-9 h-9 rounded-full p-[2px]" style="background: linear-gradient(to right, red, purple);">
                            <img :src="item.thumbnailChannel" alt="" class="w-full rounded-full border-[2px] border-white border-solid">
                        </div>
                        <p class="text-base font-bo">{{ item.snippet.channelTitle }}</p>
                    </div>
                    <div class=" h-[300px] rounded-lg overflow-hidden m-auto">
                        <img v-if="item.snippet.thumbnails.high" :src="item.snippet.thumbnails.high.url" alt="" class="w-full h-full object-cover">
                        <img v-else-if="item.snippet.thumbnails.medium" :src="item.snippet.thumbnails.medium.url" alt="" class="w-full h-full object-cover">
                        <img v-else="item.snippet.thumbnails.default" :src="item.snippet.thumbnails.default.url" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="mt-4">
                        <h2 class="text-lg text-black font-extrabold">{{ item.snippet.title }}.</h2>
                        <p class="text-sm text-gray-500 two-line">
                            {{ item.snippet.description }}
                        </p>
                    </div>
                </div> -->
            </div>

        </div>
        <div class="hidden md:block w-[400px] p-7">
            

            <div class="">
                <h3 class="text-base text-black">Tags for english</h3>

                <div class="mt-4 flex flex-wrap gap-3">
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#English</span>
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#Beginer</span>
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#EnglishA2</span>
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#EnglishForWork</span>
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#EnglishSkill</span>
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#EnglishForEveryone</span>
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#PracticeEnglish</span>
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#DailyEnglish</span>
                    <span class="block border-[1px] border-black border-solid rounded-2xl p-2 font-extrabold text-xs bg-gray-200">#LearningEnglish</span>
                    
                </div>
            </div>

            <div class="mt-14">
                <h3 class="text-base text-black">Who to subcribe</h3>
                <div class="mt-4">
                    <div class="flex gap-3 items-center w-full mb-4" v-for="channel in channelRecommend">
                        <div class="w-12 h-12 rounded-full overflow-hidden cursor-pointer" style="background: linear-gradient(to right, red, purple);">
                            <img :src="channel.snippet.thumbnails.default.url" alt="Drink" class="border-[1px] border-black border-solid w-full h-full rounded-full" />
                        </div>
                        <div>
                            <h4 class="text-sm font-extrabold text-black">{{ channel.snippet.title }}</h4>
                            <p class=" text-xs mt-[1px] text-gray-500 font-semibold">
                                {{ channel.statistics.subscriberCount }} Subcriber
                            </p>
                        </div>
                        <div class=" text-blue-600 text-sm ml-auto">
                            Follow
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<style lang="scss">
    .w-calc {
        width: calc(100% - 350px);
    }
</style>
<script lang="ts" setup>
import { ref, onBeforeMount, onMounted, getCurrentInstance } from "vue"
import youtubeItem from "@/components/youtube/youtubeItem.vue"

let instance:any  = getCurrentInstance();
let services = instance.proxy.service;


let videos = ref<any>([]);
let topChannels:any = ref([]);
let videoIDs = ref<string>('');
let messageError = ref<string>('');

let channelRecommend = ref<any>([]);

const getYoutube = async() => {
    videos.value = [];

    let params = {
        key: 'english',
        limit: 2
    };
    
    let res =  await services.youtube().searchYoutube(params);
    if(res.data.status == 'success') {
        videos.value = res.data.data.items;
    }
    else {
        messageError.value = JSON.parse(res.data.message).error.message;
    }
    

    videos.value.forEach(async (item, key) => {
        videoIDs.value += item.snippet.channelId + ",";
    //     await getChannelsTop(item.snippet.channelId, key);
    })
}

const getChannelsTop = async () => {
    if(videoIDs.value) {
        let res = await services.youtube().getChannelById({
            'channelId': videoIDs.value
        });
        res.data.data.items.forEach((element, index) => {
            videos.value[index].thumbnailChannel = element.snippet.thumbnails.default.url;
            videos.value[index].publishedAt = element.snippet.publishedAt;
        });
    }
}

const getChannelsRecommend = async () => {
    let strId = 'UCi2KOzexSdF0FLopnuEKLUQ,UCKyTokYo0nK2OA-az-sDijA,UCGLGVRO_9qDc8VDGGMTcUiQ,UCdEPvAKHIY0bXJqW71mIANg,UCHaHD477h-FeBbVh9Sh7syA,UCNnnebGhmIJ8MQ4X1HwphRw';
    let res = await services.youtube().getChannelById({
        'channelId': strId
    });
    // res.data.data.items.forEach((element, index) => {
    //     videos.value[index].thumbnailChannel = element.snippet.thumbnails.default.url;
    //     videos.value[index].publishedAt = element.snippet.publishedAt;
    // });

    channelRecommend.value = res.data.data.items;
}

// UCi2KOzexSdF0FLopnuEKLUQ,UCKyTokYo0nK2OA-az-sDijA,UCGLGVRO_9qDc8VDGGMTcUiQ,UCdEPvAKHIY0bXJqW71mIANg,UCHaHD477h-FeBbVh9Sh7syA,UCNnnebGhmIJ8MQ4X1HwphRw

onBeforeMount(async () => {
    await getYoutube();
    await getChannelsTop();
    await getChannelsRecommend();
})


</script>