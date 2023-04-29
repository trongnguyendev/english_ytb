import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  let isOpenPlayer = ref<boolean>(false);
  let isOpenPanelRight = ref<boolean>(false);

  const openDialogPlayer = () => {
    isOpenPlayer.value = false;
    isOpenPlayer.value = true;
  }

  const closeDialogPlayer = () => {
    isOpenPlayer.value = true;
    isOpenPlayer.value = false;
  }

  const openPanelRight = () => {
    isOpenPanelRight.value = false;
    isOpenPanelRight.value = true;
  }

  const closePanelRight = () => {
    isOpenPanelRight.value = true;
    isOpenPanelRight.value = false;
  }

  return { isOpenPlayer, openDialogPlayer, closeDialogPlayer, isOpenPanelRight, openPanelRight, closePanelRight}
})