<template>
    <svg class="w-9" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <rect fill="none" height="256" width="256" />
        <line fill="none" :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="128"
            x2="128" y1="192" y2="216" />
        <circle :fill="fillColor" cx="92" cy="140" r="8" />
        <circle :fill="fillColor" cx="164" cy="140" r="8" />
        <polyline fill="none" points="144 176 128 192 112 176" :stroke="strokeColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="8" />
        <path d="M152,48l55.8-13.9a8,8,0,0,1,9.8,6.2L234,127.9c1.5,8.2-9,13-14.2,6.4Z" fill="none" :stroke="strokeColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
        <path d="M104,48,48.2,34.1a8,8,0,0,0-9.8,6.2L22,127.9c-1.5,8.2,9,13,14.2,6.4Z" fill="none" :stroke="strokeColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
        <line fill="none" :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="104"
            x2="152" y1="48" y2="48" />
        <path d="M208,119.3V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V119.3" fill="none" :stroke="strokeColor"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="8" />
    </svg>
</template>
<script setup>
const fillColor = '#fff'
const strokeColor = '#fff'
</script>