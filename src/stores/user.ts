import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import services from '@/services'
import { useCookies } from "vue3-cookies";


export const useUserStore = defineStore('user', () => {
  let user = ref<any>();

  let email = ref<string>('');
  let name = ref<string>('');
  let pictureProfile = ref<string>('');

  const { cookies } = useCookies();


  const setUserInfo = (params:any):void => {
    email.value = params.email;
    name.value = params.familyName + ' ' + params.givenName;
    pictureProfile.value = params.picture;
    console.log("set info user");
    console.log(email.value);
    console.log(name.value);
  }

  const createUser = async (params:any): Promise<boolean> => {
    let param_newUser = {
      email: params.email,
      name: params.name,
      google_id: params.google_id,
      picture: params.picture,
      access_token: params.access_token,
      refresh_token: params.refresh_token,
      expires_in: params.expires_in
    };

    const isCreated = await services.auth().createUser(param_newUser);
    console.log(isCreated, 'isCreated');
    if(isCreated) {
      setUserInfo(params);
      cookies.set('access_token', params.access_token);
      return true;
    }
    else {
      return false;
    }
  }
  
  const getUserByGoogleid = (params:any) => {

  }

  return { createUser, email, name, pictureProfile }
})

