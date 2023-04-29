<template>
    <div class="w-full max-w-[440px] m-auto border-b-[1px] border-[#00000024] border-solid py-7  last:border-none">
        <div class="flex gap-3 items-center mb-3">
            <div class="w-9 h-9 rounded-full p-[2px]" style="background: linear-gradient(to right, red, purple);">
                <img :src="video.thumbnailChannel" alt="" class="w-full rounded-full border-[2px] border-white border-solid">
            </div>
            <p class="text-base font-bo">{{ video.channelTitle }}</p>
            <div v-if="video && video.publishedAt" class="text-xs ml-auto">
                <!-- <timeago :datetime="video.publishedAt"/> -->
                {{ removeTextTime(video.publishedAt) }}
                <!-- {{ removeTextTime(formatDistanceToNow(new Date(video.publishedAt), {addSuffix: true})) }} -->
            </div>
        </div>
        <div class=" h-[300px] rounded-lg overflow-hidden m-auto">
            <img :src="video.thumbnails" alt="" class="w-full h-full object-cover">
        </div>
        <div class="mt-4">
            <h2 class="text-lg text-black font-extrabold">{{ video.title }}.</h2>
            <p class="text-sm text-gray-500 two-line">
                {{ video.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, onMounted, onBeforeMount, watch } from "vue";
// import { formatDistanceToNow } from 'date-fns'
import { formatDistanceToNow } from "date-fns"
import vi from 'date-fns/locale/vi';
let video = reactive({
    'title': '',
    'description': '',
    'thumbnails': '',
    'channelTitle': '',
    'thumbnailChannel': '',
    'publishedAt': ''
});

let props = defineProps({
    video: Object
});

const setInforvideo = () =>  {
    if(props.video && props.video.snippet) {
        video.title = props.video.snippet.title;
        video.description = props.video.snippet.description;

        if(props.video.snippet.thumbnails.high) {
            video.thumbnails = props.video.snippet.thumbnails.high.url;
        }
        else if(props.video.snippet.thumbnails.medium) {
            video.thumbnails = props.video.snippet.thumbnails.medium.url;
        }
        else if(props.video.snippet.thumbnails.default) {
            video.thumbnails = props.video.snippet.thumbnails.default.url;
        }

        video.channelTitle = props.video.snippet.channelTitle;
        video.thumbnailChannel = props.video.thumbnailChannel;
        video.publishedAt = props.video.publishedAt;
    }
}

const removeTextTime = (date:any) => {
    if(date) {
        const options:any = {
            addSuffix: true,
            locale: vi,
        };

    return formatDistanceToNow(new Date(date), options);
    }
}



onMounted(() => {
    setInforvideo();
})
watch(props, (newProp) => {
    setInforvideo();
})

</script>