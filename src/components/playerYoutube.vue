<template>
    <div class=" gradient-style-5 p-4 rounded-xl">
        <div class="mb-8">
            <h2 class="text-white text-[8px] text-center">PHÁT TỪ YOUTUBE</h2>
            <p class="text-center text-base text-white font-[Montserrat-Light]">Adjust & Archivement</p>
        </div>
        

        <div class="overflow-hidden rounded-xl">
            <YoutubeVue3 ref="youtube" :videoid="video" :loop="play.loop" :width="200" :height="200" :modestbranding="0" class="w-full"
            @ended="onEnded" @paused="onPaused" @played="onPlayed"/>
        </div>

        <div class="mt-4">
            <h2 class="text-base font-[Montserrat-Light] text-white text-center">The Adventure</h2>
        </div>
        
        <div class="text-center w-full my-6 mt-2">
            <input type="range" name="" v-model="currentTime" :max="totalTIme" class="w-full input_range_style_1" @change="changeTime">
            <div class="flex justify-between">
                <span class="text-xs text-white">{{ currentTime }}</span>
                <span class="text-xs text-white">{{ totalTIme }}</span>
            </div>
        </div>
        
        <div class="flex justify-between gap-2"> 
            <button @click="prevCurrentTime" class="effect w-full">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[rgb(255 111 17 / 85%)] m-auto">
                    <path d="M26 7C26 5.76393 24.5889 5.05836 23.6 5.8L11.6 14.8C10.8 15.4 10.8 16.6 11.6 17.2L23.6 26.2C24.5889 26.9416 26 26.2361 26 25V7Z" fill="rgb(255 111 17 / 85%)" stroke="rgb(255 111 17 / 85%)" stroke-width="2" stroke-linejoin="round"></path>
                    <path d="M6 5L6 27" stroke="rgb(255 111 17 / 85%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>	
            </button>
            <button class="effect w-full" @click="playCurrentVideo" v-if="!isPlay">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[rgb(255 111 17 / 85%)] m-auto">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>
            </button>
            <!-- <button @click="stopCurrentVideo"><img src="@/assets/images/pause.png" alt=""></button> -->
            <button @click="pauseCurrentVideo" v-if="isPlay" class="effect w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 m-auto text-[rgb(255 111 17 / 85%)]">
                    <path d="M15 6.75a.75.75 0 00-.75.75V18a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H15zM20.25 6.75a.75.75 0 00-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-.75zM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061z" />
                </svg>
            </button>

            <button @click="nextCurrentTime" class="effect w-full">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                    <path d="M6 7C6 5.76393 7.41115 5.05836 8.4 5.8L20.4 14.8C21.2 15.4 21.2 16.6 20.4 17.2L8.4 26.2C7.41115 26.9416 6 26.2361 6 25V7Z" fill="rgb(255 111 17 / 85%)" stroke="rgb(255 111 17 / 85%)" stroke-width="2" stroke-linejoin="round"></path>
                    <path d="M26 5L26 27" stroke="rgb(255 111 17 / 85%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>	
            </button>
            

            

            
        </div>
        <div class="flex gap-3 mt-5">
            <button @click="restartVideo" class="effect w-full text-center">  
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 m-auto">
                    <path d="M17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929C17.3166 13.9024 16.6834 13.9024 16.2929 14.2929L17.7071 15.7071ZM13 19L12.2929 18.2929C11.9024 18.6834 11.9024 19.3166 12.2929 19.7071L13 19ZM16.2929 23.7071C16.6834 24.0976 17.3166 24.0976 17.7071 23.7071C18.0976 23.3166 18.0976 22.6834 17.7071 22.2929L16.2929 23.7071ZM19.9359 18.7035L19.8503 17.7072L19.9359 18.7035ZM8.95082 19.9005C9.50243 19.9277 9.97163 19.5025 9.99879 18.9509C10.026 18.3993 9.6008 17.9301 9.04918 17.9029L8.95082 19.9005ZM6.06408 18.7035L5.97851 19.6998L6.06408 18.7035ZM1.07501 13.4958L0.075929 13.5387L1.07501 13.4958ZM1.07501 6.50423L0.0759292 6.46127L1.07501 6.50423ZM6.06409 1.29649L6.14965 2.29282L6.06409 1.29649ZM19.9359 1.29649L19.8503 2.29283L19.9359 1.29649ZM24.925 6.50423L23.9259 6.54718L24.925 6.50423ZM24.925 13.4958L25.9241 13.5387V13.5387L24.925 13.4958ZM16.2929 14.2929L12.2929 18.2929L13.7071 19.7071L17.7071 15.7071L16.2929 14.2929ZM12.2929 19.7071L16.2929 23.7071L17.7071 22.2929L13.7071 18.2929L12.2929 19.7071ZM19.8503 17.7072C17.5929 17.901 15.3081 18 13 18V20C15.3653 20 17.7072 19.8986 20.0215 19.6998L19.8503 17.7072ZM9.04918 17.9029C8.07792 17.8551 7.1113 17.7898 6.14964 17.7072L5.97851 19.6998C6.96438 19.7845 7.95525 19.8515 8.95082 19.9005L9.04918 17.9029ZM2.07408 13.4528C2.02486 12.3081 2 11.157 2 10H0C0 11.1856 0.0254804 12.3654 0.075929 13.5387L2.07408 13.4528ZM2 10C2 8.84302 2.02486 7.69192 2.07408 6.54718L0.0759292 6.46127C0.0254806 7.63461 0 8.81436 0 10H2ZM6.14965 2.29282C8.4071 2.09896 10.6919 2 13 2V0C10.6347 0 8.29281 0.101411 5.97853 0.30016L6.14965 2.29282ZM13 2C15.3081 2 17.5929 2.09896 19.8503 2.29283L20.0215 0.30016C17.7072 0.101411 15.3653 0 13 0V2ZM23.9259 6.54718C23.9751 7.69192 24 8.84302 24 10H26C26 8.81436 25.9745 7.63461 25.9241 6.46127L23.9259 6.54718ZM24 10C24 11.157 23.9751 12.3081 23.9259 13.4528L25.9241 13.5387C25.9745 12.3654 26 11.1856 26 10H24ZM19.8503 2.29283C22.092 2.48534 23.8293 4.29889 23.9259 6.54718L25.9241 6.46127C25.7842 3.20897 23.2653 0.578736 20.0215 0.30016L19.8503 2.29283ZM6.14964 17.7072C3.90797 17.5147 2.17075 15.7011 2.07408 13.4528L0.075929 13.5387C0.215764 16.791 2.7347 19.4213 5.97851 19.6998L6.14964 17.7072ZM2.07408 6.54718C2.17075 4.29889 3.90798 2.48534 6.14965 2.29282L5.97853 0.30016C2.73471 0.578735 0.215764 3.20897 0.0759292 6.46127L2.07408 6.54718ZM20.0215 19.6998C23.2653 19.4213 25.7842 16.791 25.9241 13.5387L23.9259 13.4528C23.8292 15.7011 22.092 17.5147 19.8503 17.7072L20.0215 19.6998Z" fill="#bbb"></path>
                </svg>
            </button>
            <button @click="rateVIdeo" class="effect w-full text-white">
                {{ rateList[indexRate] }}
            </button>
            <button @click="muteCurrentVideo" v-if="!isMute" class="effect w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white m-auto">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" fill="#bbb" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" fill="#bbb" />
                </svg>
            </button>
            <button @click="unmuteCurrentVideo" v-if="isMute" class="effect w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white m-auto">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" fill="#bbb" />
                </svg>
            </button>
        </div>
        <div class="flex gap-3 mt-5">
            <button class="effect w-full text-white" @click="ToggleMic">
                <span v-if="!isRecording">Record</span>
                <span v-else class="flex items-center justify-center">Stop <div class="w-2 h-2 rounded-full bg-red-500 ml-2"></div></span>
            </button>
            <button class="effect w-full text-white" @click="openPanel" v-if="!storeDialog.isOpenPanelRight">Show</button>
            <button class="effect w-full text-white" @click="closePanel" v-if="storeDialog.isOpenPanelRight">Close</button>
        </div>
        <div class="flex mt-3 gap-3">
            <button class="effect w-full text-white" @click="">Add</button>
        </div>
        
  </div>
</template>

<script lang="ts" setup>
import { YoutubeVue3 } from "youtube-vue3"
import { ref, onMounted, watch } from "vue";
import { useYoutubeStore } from "@/stores/youtube"
import { useDialogStore } from "@/stores/dialog"
import { useRecordStore } from "@/stores/record"

import { speechSynthesis, test } from "@/utils/helps";

const store = useYoutubeStore();
const storeDialog = useDialogStore();
const storeRecord = useRecordStore();

const { videoId } = store;


const video = ref('');

let youtube = ref();

let temp = ref({ video_id: video.value, loop: 1 });
let play = ref({ video_id: video.value, loop: 1 });

let isPlay = ref(false);
let currentTime = ref(0);
let totalTIme = ref(0);
let isMute = ref(false);

let convertCurrentTime = ref();
let convertCurrentTotalTime = ref();

let interval = ref();

const initData = () => {
    isPlay.value = false;
    currentTime.value = 0;
    totalTIme.value = 0;
    isMute.value = false;
}

const rateList = ref<number[]>([0.25, 0.5, 1, 1.5, 2]);
let indexRate = ref<number>(2);

const rateVIdeo = () => {
    indexRate.value++;
    if(indexRate.value > 4) {
        indexRate.value = 0;
    }
    youtube.value.player.setPlaybackRate(rateList.value[indexRate.value]);

}

const applyConfig = () => {
    play.value = Object.assign(play.value, temp.value);
}

const playCurrentVideo = () => {
    youtube.value.player.playVideo();
}

const stopCurrentVideo = () => {
    youtube.value.player.stopVideo();
}

const pauseCurrentVideo = () => {
    youtube.value.player.pauseVideo();
}

const muteCurrentVideo = () => {
    isMute.value = true;
    youtube.value.player.mute();
}

const unmuteCurrentVideo = async () => {
    isMute.value = false;
    youtube.value.player.unMute();
}

const nextCurrentTime = () => {
    currentTime.value += 5;
    youtube.value.player.seekTo(currentTime.value, true);
}
const prevCurrentTime = () => {
    currentTime.value -= 5;
    currentTime.value =  currentTime.value < 0 ? 0 :  currentTime.value;
    youtube.value.player.seekTo(currentTime.value, true);
}
const restartVideo = () => {
    currentTime.value = 0;
    youtube.value.player.seekTo(currentTime.value, true);
}

const changeTime = () => {
    pauseCurrentVideo();
    youtube.value.player.seekTo(currentTime.value, true);
}

const loopVideo = () => {
    temp.value.loop = 0;
}


const openPanel = () => {
    storeDialog.openPanelRight();
}

const closePanel = () => {
    storeDialog.closePanelRight();
}


let audio = ref();
const questions = ref([]);

const data= ref('');


let recognition:any = null;

const onEnded = () => {
}

const onPaused = () => {
    isPlay.value = false;
    clearInterval(interval.value);
}

const convertDate = (date) => {
    // let a = new Date(date);
    // console.log(a.getHours() + "---" + a.getMinutes() + "---" + a.getSeconds() );
    // console.log(a);
}

const onPlayed = (c) => {
    isPlay.value = true;
    interval.value = setInterval(function() {
        youtube.value.player.getCurrentTime().then((time) => {
            currentTime.value = parseInt(time);
            
        });
      }, 1000);
}

const transcript = ref('')
const isRecording = ref(false)
const Recognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
const sr = new Recognition()

const CheckForCommand = (result) => {
	const t = result[0].transcript;
	if (t.includes('stop recording')) {
		sr.stop()
	} else if (
		t.includes('what is the time') ||
		t.includes('what\'s the time')
	) {
		sr.stop()
		alert(new Date().toLocaleTimeString())
		setTimeout(() => sr.start(), 100)
	}
}

const processSpeech = () => {
    // sr.continuous = true
	// sr.interimResults = true

	// sr.onstart = () => {
	// 	console.log('SR Started')
	// 	isRecording.value = true
	// }

	// sr.onend = () => {
	// 	console.log('SR Stopped')
	// 	isRecording.value = false
	// }

	// sr.onresult = (evt) => {
    //     console.log("----");
    //     console.log(evt);
    //     console.log("----");
	// 	for (let i = 0; i < evt.results.length; i++) {
	// 		const result = evt.results[i]

	// 		if (result.isFinal) CheckForCommand(result)
	// 	}

	// 	const t = Array.from(evt.results)
	// 		.map(result => result[0])
	// 		.map(result => result.transcript)
	// 		.join('')
		
	// 	transcript.value = t
    //     storeRecord.setRecordYT(transcript.value);
    //     console.log(transcript.value);
	// }
}

const ToggleMic = () => {
	if (isRecording.value) {
		sr.stop()
	} else {
		sr.start()
	}
}

onMounted(() => {
    initData();
    youtube.value.player;
    video.value = store.videoId;

    youtube.value.player.getDuration().then((time) => {
        totalTIme.value = parseInt(time);
        
    })

    processSpeech();
})



watch(store, () => {
    initData();
    console.log("watchhhhh");
    video.value = store.videoId;
    youtube.value.player.getDuration().then((time) => {
            console.log("check");
            totalTIme.value = parseInt(time);
        })
})

</script>