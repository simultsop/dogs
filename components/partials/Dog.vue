<template>
    <div @click="addSaveDog(dog)"
        class="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 cursor-pointer">
        <PartialsImage :url="dog"
            class="object-fill object-center hover:object-scale-down pointer-events-none group-hover:opacity-75 h-20" />
    </div>
</template>
<script setup>
const props = defineProps({
    dog: String
})

function addSaveDog(url) {
    const myDogs = useState('guest-savess', () => []);
    if (!myDogs.value.includes(url)) {
        myDogs.value.push(url)
        useFetch('/api/write?key=guest-savess', {
            method: 'post',
            body: myDogs.value
        })
    }
};
</script>