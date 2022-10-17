<template>
    <div class="overflow-hidden rounded-lg ">
        <div class="p-2">
            <ul role="list"
                class="grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                <li v-for="dog in myDogs" :key="dog" class="relative">
                    <PartialsDog :dog="dog" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
const myDogs = useState('guest-savess', () => []);
</script>