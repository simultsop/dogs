<template>
    <div @click="addSaveDog(dog)"
        class="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 cursor-pointer">
        <PartialsImage :url="dog" />
    </div>
</template>
<script setup>
const props = defineProps({
    dog: String
})

const fingerprint = useState('guest-fingerprint', () => 'guest');
const myDogs = useState(fingerprint.value);

function addSaveDog(url) {
    if (Array.isArray(myDogs.value) && !myDogs.value?.includes(url)) {
        myDogs.value.push(url)
        useFetch('/api/write?key=' + fingerprint.value, {
            method: 'post',
            body: myDogs.value
        })
    }
};
</script>