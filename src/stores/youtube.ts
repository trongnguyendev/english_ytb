import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useYoutubeStore = defineStore('youtube', () => {
  const videoId = ref('');
  const videoChannel = ref([]);

  const setVideoId = (id:string) => {
    videoId.value = '';
    videoId.value = id;
  }

  const setVideoChannel = (param) => {
    videoChannel.value = [];
    videoChannel.value = param;
  }
  const resetVideoChannel = () => {
    videoChannel.value = [];
  }

  return { videoId, setVideoId, videoChannel, setVideoChannel, resetVideoChannel }
})