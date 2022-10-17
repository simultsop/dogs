<template>
    <svg v-if="myDogs.includes(url)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="#ff0000" class="w-8 h-8 absolute inset-0 flex justify-center items-center z-10">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>

    <img :src="url" loading="lazy" />
</template>
<script setup>
const props = defineProps({
    url: String
})

const myDogs = useState('guest-savess', () => [])
</script>