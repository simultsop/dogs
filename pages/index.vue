<template>
    <img loading="lazy" :src="dog" title="Random" style="width:150px;height:auto" />
    <button class="px-5 py-2 border rounded hover:bg-teal-200">Test</button>
</template>
<script setup>
const dog = await randomDogApi()
</script>
