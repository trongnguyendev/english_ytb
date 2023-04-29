import { ref, computed, getCurrentInstance ,reactive } from 'vue'
import { defineStore } from 'pinia'
import services from '@/services'

export const useAuthStore = defineStore('auth', () => {
  let accessToken = ref<string>('');
  let isLogined = ref<boolean>(false);

  let userInfo = reactive({
    "name": '',
    "email": '',
    
  })

  const setAccessToken = (token:string) => {
    accessToken.value = token;
  }
  const setLogined = () => {
    isLogined.value = true;
  }
  const setLogout = () => {
    isLogined.value = false;
  }
  const checkAuth = async (params:object) => {
    const auth = await services.auth().checkAuth(params);
    if(auth.data.status == 'Success') {
        setLogined();
    }
    return auth
  }

  

  return { setAccessToken, accessToken, setLogined, setLogout, isLogined, checkAuth }
})