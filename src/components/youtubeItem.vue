<template>
    <div class="sources_item" v-if="video.id.kind == 'youtube#video' || video.kind == 'youtube#playlist'" @click="actionVideo">
        <div class="picture">
            <img v-if="video.snippet.thumbnails.high" :src="video.snippet.thumbnails.high.url" alt="">
            <img v-if="video.snippet.thumbnails.default" :src="video.snippet.thumbnails.default.url" alt="">
            <div class="btnYoutubeCustom"></div>
        </div>
        <div class="title" v-html="video.snippet.title"></div>
        <div class="more">{{ video.snippet.channelTitle }}</div>
    </div>
    <div class="sources_channel_item" v-if="video.id.kind == 'youtube#channel'">
        <div class="picture">
            <img v-if="video.snippet.thumbnails.high" :src="video.snippet.thumbnails.high.url" alt="">
            <img v-if="video.snippet.thumbnails.default" :src="video.snippet.thumbnails.default.url" alt="">
            <div class="btnYoutubeCustom"></div>
        </div>
        <div class="info">
            <div class="title" v-html="video.snippet.title"></div>
            <div class="more">{{ video.snippet.description }}</div>
        </div>
        
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, onMounted, onBeforeMount, defineEmits} from "vue"
import { useYoutubeStore } from "@/stores/youtube"
import { useDialogStore } from "@/stores/dialog"

const store = useYoutubeStore();
const { setVideoId } = store;

const storeDialog = useDialogStore();

const emit = defineEmits(['clickVideo']);
let video = ref<any>();
const props = defineProps({
    video: Object
});

const actionVideo = () => {
    let idVide = video.value.id.videoId ? video.value.id.videoId : video.value.id 
    setVideoId(video.value.id.videoId)
    emit('clickVideo', video.value);
    storeDialog.openDialogPlayer();
    
}
onBeforeMount(() => {
    video.value = props.video;
    console.log(video.value, '123');
})

</script>

<style lang="scss" scoped>
.sources_item {
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
        @apply text-lg font-[Montserrat-SemiBold] mt-2
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
.sources_channel_item {
    .picture {
        img {
            @apply w-[132px] h-full rounded-xl object-cover
        }
        @apply rounded-xl overflow-hidden w-[132px] h-[132px] relative
    }
    .info {
        .title {
            @apply font-[Montserrat-SemiBold] text-lg
        }
        @apply max-w-[400px] flex flex-col justify-between py-2
    }
    @apply w-full flex gap-4
}
</style>