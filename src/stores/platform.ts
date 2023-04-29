import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlatformStore = defineStore('platform', () => {
    let isMobile = ref<boolean>();

    const checkPlatform = () => {
        const userAgent = navigator.userAgent;

        if (/Mobi|Android/i.test(userAgent)) {
            isMobile.value = true;
        } else {
            isMobile.value = false;
        }
    }


  return { isMobile, checkPlatform }
})