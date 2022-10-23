<template>
    <div @click="addSaveDog(dog)"
        class="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 cursor-pointer flex justify-center items-center">
        <PartialsImage :url="dog" :saved="imageIsSaved" />
    </div>
</template>
<script setup>
const props = defineProps({
    dog: String
})

const imageIsSaved = ref(false);

if (process.client) {
    const uid = useState('guest-uid', getUid);
    const myDogs = useState(uid.value);
    if (Array.isArray(myDogs.value) && myDogs.value.includes(props.dog)) imageIsSaved.value = true;
}

const addSaveDog = (url) => {
    const uid = useState('guest-uid', getUid);
    const myDogs = useState(uid.value);
    console.log(uid.value);
    console.log(url)
    console.log(myDogs.value)
    if (Array.isArray(myDogs.value) && !myDogs.value?.includes(url)) {
        console.log('Saving new dogs')
        myDogs.value.push(url)
        console.log(myDogs.value)
        useFetch('/api/write?key=' + uid.value, {
            method: 'post',
            body: myDogs.value
        });
        imageIsSaved.value = true;
    }
};

</script>