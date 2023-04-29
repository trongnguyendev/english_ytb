import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import service from "./services"
import VueSpeech from 'vue-speech'
import timeago from 'vue-timeago3'
// import VueCookies from 'vue3-cookies'


// globalCookiesConfig({
//     expireTimes: "30d",
//     secure: true,
// });

import defaultLayout from './layouts/defaultLayout.vue'
import loginLayout from './layouts/loginLayout.vue'

import './assets/style.css'

// router.push
// import { useAuthStore } from "@/stores/auth";



const app = createApp(App)
app.config.globalProperties.service = service;

app.use(createPinia())
app.use(router)
app.use(VueSpeech)
app.use(timeago)
// app.use(VueCookies, {
//     expireTimes: "1d",
//     secure: true,
// })

app.component('defaultLayout',defaultLayout)
app.component('loginLayout', loginLayout)


app.mount('#app')

