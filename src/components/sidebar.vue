<template>
    <div class="sidebar fixed bottom-0 left-0 order-2 mt-auto md:order-1 w-full md:h-full py-2 md:py-7 px-3 border-t-[1px] md:border-r-[1px] border-[#00000024] border-solid z-50 bg-white duration-300  ease-in " :class="[searchPanel ? 'md:w-[74px]': 'md:w-[300px]']">
        <div class="relative flex flex-col md:h-full">
            <div class="logo relative hidden md:block">
                <div class="text-xl font-logo px-3 duration-200" :class="[searchPanel ? 'opacity-0' : 'opacity-100']">LIKE</div>
                <div class="w-11 h-11 duration-100 absolute top-0 left-0" :class="[searchPanel ? 'opacity-100' : 'opacity-0']">
                    <img src="@/assets/images/like.png" alt="" class="w-full h-full">
                </div>
            </div>
            <ul class="z-30  md:mt-28 md:h-full flex justify-around md:justify-between flex-row md:flex-col md:gap-2">
                <router-link to="/" class="flex items-center cursor-pointer p-3 rounded-lg duration-700" :class="{'active': activeRoute == 'dashboard'}" @click="clickNav">
                    <IconHomeActive v-if="!searchPanel && activeRoute == 'dashboard'" class="w-7 h-7 md:w-6 md:h-6" />
                    <IconHome v-else class="w-7 h-7 md:w-6 md:h-6" />
                    <span class="hidden md:block text-base font-family duration-200 w-fit ease-in ml-3"  :class="[searchPanel ? 'fixed -left-[400px]': 'block']">Home</span>
                </router-link>

                <!-- Search for web -->
                <div class="items-center cursor-pointer p-3 rounded-lg duration-700 hidden md:flex" @click="showpanelsearch">
                    <IconSearchActive v-if="searchPanel" class="w-7 h-7 md:w-6 md:h-6" />
                    <IconSearch v-else class="w-7 h-7 md:w-6 md:h-6" />
                    <span class="hidden md:block text-base font-family duration-200 w-fit ease-in ml-3"  :class="[searchPanel ? 'fixed -left-[400px]': 'block']">Search</span>
                </div>

                <!-- Search for mobile -->
                <router-link to="/search" class="flex md:hidden items-center cursor-pointer p-3 rounded-lg duration-700" :class="{'active': activeRoute == 'explore'}" @click="clickNav">
                    
                    <IconSearch v-if="!searchPanel && activeRoute == 'search'" class="w-7 h-7 md:w-6 md:h-6" />
                    <IconSearchActive v-else class="w-7 h-7 md:w-6 md:h-6" />
                    <span class="hidden md:block text-base font-family duration-200 w-fit ease-in ml-3"  :class="[searchPanel ? 'fixed -left-[400px]': 'block']">Search</span>
                </router-link>

                <router-link to="/explore" class="flex items-center cursor-pointer p-3 rounded-lg duration-700" :class="{'active': activeRoute == 'practice'}" @click="clickNav">
                    <IconExploreActive v-if="!searchPanel && activeRoute == 'explore'" class="w-7 h-7 md:w-6 md:h-6 z-40" />
                    <IconExplore v-else class="w-7 h-7 md:w-6 md:h-6 z-40" />
                    <span class="hidden md:block text-base font-family duration-200 w-fit ease-in ml-3"  :class="[searchPanel ? 'fixed -left-[400px]': 'block']">Explore</span>
                </router-link>
                <router-link to="/document" class="flex items-center cursor-pointer p-3 rounded-lg duration-700" :class="{'active': activeRoute == 'document'}" @click="clickNav">
                    <div class=" w-6 h-6 rounded-full overflow-hidden">
                        <img class="w-full h-full" src="@/assets/images/axn.jpeg" alt="">
                    </div>
                    <span class="hidden md:block text-base font-family duration-200 w-fit ease-in ml-3"  :class="[searchPanel ? 'fixed -left-[400px]': 'block']">Profile</span>
                </router-link>

                <div class="flex gap-3 px-3 items-center cursor-pointer md:mt-auto">
                    <IconBar class="w-7 h-7 md:w-6 md:h-6" />
                    <span class="hidden md:block text-base font-bold font-family duration-200 w-fit ease-in ml-3"  :class="[searchPanel ? 'fixed -left-[400px]': 'block']">Settings</span>
                </div>
            </ul>
        </div>
    </div>
    <div 
    class="px-4 py-7 hidden md:block fixed left-0 z-10 bg-white h-full top-0 bg-white  duration-300  ease-in rounded-r-lg border-r-[2px] border-[#00000024] border-solid" 
    :class="[searchPanel ? ' w-[400px] shadow-1 left-[74px] opacity-100': 'w-[400px] opacity-0']">
        <h1 class="text-xl font-extrabold">Search</h1>

        <div class="bg-[#cccccc73] rounded-lg py-2 px-2 text-base mt-12 mb-7">
            <input type="text" placeholder="Search" class="w-full h-full bg-transparent outline-0 text-base">
        </div>

        <div class="border-t-[1px] border-[#00000024] border-solid">
            <h2 class="text-base font-bold mt-4 mb-4">Recent</h2>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>
.sidebar {
    .menu-item {
        &:hover, &.active {
            @apply bg-[#cccccc73]
        }
        @apply flex items-center cursor-pointer p-3 rounded-lg duration-700
    }
}
.hideIcon {
    width: 0px;
    overflow: hidden;
}
.active {
    svg {
        // @apply w-6 h-6
    }
    > span {
        @apply font-bold
    }
}
</style>

<script lang="ts" setup>
import { ref, defineEmits, onMounted, watch, onBeforeMount } from "vue"
import { useRoute } from 'vue-router'
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'

import IconSearch from "@/components/icons/IconSearch.vue"
import IconSearchActive from "@/components/icons/IconSearchActive.vue"
import IconAnalyst from "@/components/icons/IconAnalyst.vue"
import IconRecord from "@/components/icons/IconRecord.vue"
import IconFindPlus from "@/components/icons/IconFindPlus.vue"
import IconDocument from "@/components/icons/IconDocument.vue"
import IconRocket from "@/components/icons/iconRocket.vue"
import IconExplore from "@/components/icons/IconExplore.vue"
import IconHome from "@/components/icons/IconHome.vue"
import IconExploreActive from "@/components/icons/IconExploreActive.vue"
import IconHomeActive from "@/components/icons/IconHomeActive.vue"
import IconBar from "@/components/icons/IconBar.vue"

import { usePlatformStore } from "@/stores/platform"
import { useAuthStore } from "@/stores/auth"
const storePlatform = usePlatformStore();
const storeAuth = useAuthStore();

const route = useRoute()

let activeRoute = ref<any>('');
let isOpenPanel = ref<boolean>(true);


const accept = (close, open:any) => {
    console.log(open);
    // isOpenPanel.value = open;
    // close();
}

const searchPanel = ref<boolean>(false);

const showpanelsearch = () => {
    searchPanel.value = !searchPanel.value;
}

const clickNav = () => {
    if(searchPanel.value) {
        searchPanel.value = false;
    }
}

onMounted(() => {
    
})
onBeforeMount(() => {
    activeRoute.value = route.name;
})
watch(route, (newRoute) => {
    activeRoute.value = newRoute.name;
});
watch(open, () => {
    // console.log("change");
})

</script>

