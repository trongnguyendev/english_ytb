<template>
    <div class="w-full h-full flex flex-col md:flex-row rounded-xl bg-white overflow-hidden shadow-lg relative">
      <sidebar />
      <div class="order-1 md:order-2 overflow-scroll w-full md:w-[80rem] mx-auto">
        <slot></slot>
      </div>
      
      <!-- <sidebarRight class="order-3 w-full max-w-[350px]" v-if="!store.isMobile" /> -->
      
      <!-- <div class="w-full max-w-[370px] order-4 bg-slate-400" v-if="!store.isMobile && isOpenPanel">
        {{ storeRecord.recordYT }}
      </div> -->

      <!-- Dialog for mobile -->
      <!-- <Dialog :open="isOpen" @close="setIsOpen" v-if="store.isMobile" class="bg-[#000000f5] fixed z-50 w-full h-full flex">
          <DialogPanel class="p-4 m-auto">
              <playerYoutube />
              <button @click="setIsOpen(false)">Deactivate</button>
              <button @click="setIsOpen(false)">Cancel</button>
          </DialogPanel>
      </Dialog> -->
      
    </div>
  </template>
  
  <style lang="scss">
  .wcalc {
    width: calc(100% - 300px);
    margin-left: auto;
  }
  </style>
  <script setup lang="ts">
  import { ref, watch, onMounted, onBeforeMount } from "vue"
  import { RouterLink, RouterView } from 'vue-router'
  import sidebar from '@/components/sidebar.vue'
  import sidebarRight from '@/components/sidebarRight.vue'
  
  import { usePlatformStore } from "@/stores/platform"
  import { useDialogStore } from "@/stores/dialog"
  import { useRecordStore } from "@/stores/record"
  
  import { TransitionRoot } from '@headlessui/vue'
  
  import {
      Dialog,
      DialogPanel,
      DialogTitle,
      DialogDescription,
  } from '@headlessui/vue'
  
  import playerYoutube from '@/components/playerYoutube.vue'
  
  // ...
  
  // ...
  
  const isOpen = ref(true);
  let isOpenPanel = ref<boolean>(false);
  
  const setIsOpen = (value) => {
    isOpen.value = value;
    storeDialog.closeDialogPlayer();
  }
  
  const store = usePlatformStore();
  const storeDialog = useDialogStore();
  const storeRecord = useRecordStore();
  
  onBeforeMount(() => {
    // store.checkPlatform();
    // isOpenPanel.value = storeDialog.isOpenPanelRight;
  })
  watch(store, (newStore) => {
    // store.checkPlatform();
  })
  
  watch((window as any).innerWidth, () => {
    console.log("size change");
  })
  watch(storeDialog, (newStore) => {
    // isOpen.value = storeDialog.isOpenPlayer;
    // isOpenPanel.value = storeDialog.isOpenPanelRight;
  })
  onMounted(() => {
    
  })
  
  </script>
  
  <style lang="scss" scoped>


  </style>
  