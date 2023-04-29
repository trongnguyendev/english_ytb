<template>
    <div class="block w-full primary-clr-mb lg:primary-clr dashboard overflow-scroll order-1 md:order-2">
        token
    </div>
</template>

<!-- auth/google/callback -->
<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance } from "vue"
import { useRoute } from 'vue-router'
import { useAuthStore } from "@/stores/auth"
import { useUserStore } from "@/stores/user"
import router from "@/router";

const route = useRoute()
let instance:any = getCurrentInstance();
let services = instance.proxy.service;
const store = useAuthStore();
const storeUser = useUserStore();

const login = async () => {
    let params = {
        code : route.query.code,
        state: route.query.state,
        prompt: route.query.prompt,
    };

    let res = await services.auth().authGoogle(params);
    // {
    //     "data": {
    //         "access_token": "ya29.a0Ael9sCMaK_sYuGP4FwG4AYLEFcViHfUl0fGHyREq5oIazCkhR0NYq6xVM9DZrs0PwgFPnLUPSxPS0JvqgPduJ2hWqTLDuv6JTPpV8l7OldOMgzDa4syDZ8v4kuQEva8sfPOANVOIGNk75NBrmIaO4X82VstZaCgYKAX8SARESFQF4udJh_NYmLEEnZeMbPCs1L5u68A0163",
    //         "expires_in": 3599,
    //         "scope": "https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile",
    //         "token_type": "Bearer",
    //         "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg2OTY5YWVjMzdhNzc4MGYxODgwNzg3NzU5M2JiYmY4Y2Y1ZGU1Y2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3Njc2ODg5OTIyMy1hMWV1ZDJ0MzdsM2ptMWV2djVxdGJtZmhncmltamZwNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6Ijc2NzY4ODk5MjIzLWExZXVkMnQzN2wzam0xZXZ2NXF0Ym1maGdyaW1qZnA2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MTU5NDA3NDcwNjYwMzE4NTg3IiwiZW1haWwiOiJtaW5odHJvbmcxNzAyMTk5NkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ik5hYll2V1JQZ0xFREpfcHVnS1RfT0EiLCJuYW1lIjoiTmd1eWVuIFRyb25nIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eGJhNlJ1U3ZDMkxsT2JCdVFZeW9DVDEtaURZVDFrUldPd2FBQ0gxb2c9czk2LWMiLCJnaXZlbl9uYW1lIjoiTmd1eWVuIiwiZmFtaWx5X25hbWUiOiJUcm9uZyIsImxvY2FsZSI6InZpIiwiaWF0IjoxNjgyMTUxMzgxLCJleHAiOjE2ODIxNTQ5ODF9.O403beP7oNfWcDLNzavGdUWND7ZEd_6nMSUqFZ8j7JWxrgv87bJrjOlESEIdcXBXWVOmUhpNjFhVxCCo2gwyolQJlEksCmxvIonvqDFiv2CCmd5N_C17ev1ytA7zexpdWMGoZ7COkKM62uu93-QfZOMvCaFXS5I5_73GFTpLv3HGGawji0Cm4n6EN_pldCyiHPPqBjp3X-amPAoIu5MtDKU2vhJo82XPLYX0MOCgrF5qMEg-Eulhj7BEiuY3ollaLq8LViVELkdv3RHT23ulRzBamtvupjmwz707VkD9tO3dzfhupjQd3iE5SAAekMx62-LFqi9BTd9aYXTGAevTTw",
    //         "created": 1682151381
    //     },
    //     "message": "Authenticated",
    //     "status": "success"
    // }

    if(res.status == 200) {
        let param_token = {
            access_token: res.data.data.access_token
        };
        let resUser = await services.auth().getUserinfo(param_token);
        console.log(resUser, 'userInfo');

        let param_User = {
            email: resUser.data.data.email,
            name: resUser.data.data.name,
            familyName: resUser.data.data.familyName,
            givenName: resUser.data.data.givenName,
            picture: resUser.data.data.picture,
            google_id: resUser.data.data.id,
            access_token: res.data.data.access_token,
            refresh_token: res.data.data.refresh_token,
            expires_in: res.data.data.expires_in
        };

        console.log(param_User, 'param user');
        let isUser: boolean = await storeUser.createUser(param_User);
        
        if(isUser) {
            store.setAccessToken(res.data.data.access_token);
            store.setLogined();
            router.push({ name: 'dashboard' });
        }
        
    }
    // {
    // "data": {
    //     "email": "minhtrong17021996@gmail.com",
    //     "familyName": "Trong",
    //     "gender": null,
    //     "givenName": "Nguyen",
    //     "hd": null,
    //     "id": "106159407470660318587",
    //     "link": null,
    //     "locale": "vi",
    //     "name": "Nguyen Trong",
    //     "picture": "https://lh3.googleusercontent.com/a/AGNmyxba6RuSvC2LlObBuQYyoCT1-iDYT1kRWOwaACH1og=s96-c",
    //     "verifiedEmail": true
    // },
    // "message": "Info user",
    // "status": "Success"
    // }
}

onMounted(() => {
    // login();
})

</script>