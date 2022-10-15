<template>
    <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <li v-for="dog in randomDogs" :key="dog" class="relative">
            <div
                class="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img :src="dog" loading="lazy" alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
            </div>
        </li>
    </ul>
</template>
<script setup>
const randomDogs = await randomDogApi(12)
</script>
