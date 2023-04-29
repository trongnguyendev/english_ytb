<template>
    <div class="form-search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <form action="" @submit="searchData">
        <input type="text" v-model="dataSearch" id="" placeholder="Search something" class="form-search-input">
        </form>
    </div>
</template>

<script lang="ts" setup>

import { ref, defineEmits, defineComponent } from "vue"
const emit = defineEmits(['emitSearch'])

let dataSearch = ref<string>('')

const searchData = (e) => {
    e.preventDefault();
    console.log(dataSearch.value, 'aa');
    emit('emitSearch', dataSearch.value);
}
</script>
<style lang="scss" scoped>
.form-search {
    &-input {
        &:focus-visible {
            outline: none;
        }
        @apply bg-transparent text-xs
        
    }
    @apply flex items-center gap-2
}
</style>