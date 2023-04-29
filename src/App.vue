<template>
  <component is="defaultLayout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, watch } from "vue"
import { useAuthStore } from "./stores/auth";
import { useCookies } from "vue3-cookies";
import { useRoute } from 'vue-router';
import router from '@/router/index'
const { cookies } = useCookies();
const storeAuth = useAuthStore();

const route = useRoute();
const layout = ref('defaultLayout');

onMounted( async () => {
});

watch(storeAuth, () => {
})




</script>