import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecordStore = defineStore('record', () => {
  const recordYT = ref<string>('');

  const setRecordYT = (record:string) => {
    recordYT.value = record;
  }

  return { recordYT, setRecordYT }
})