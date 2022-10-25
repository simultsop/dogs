<template>
    <TransitionRoot appear :show="isShowing" as="template" enter="transform transition duration-[400ms]"
        enter-from="opacity-0 rotate-[-120deg] scale-50" enter-to="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out" leave-from="opacity-100 rotate-0 scale-100 "
        leave-to="opacity-0 scale-95 ">
        <div @click="addSaveDog(dog)"
            class="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 cursor-pointer flex justify-center items-center">

            <PartialsImage :url="dog" :saved="imageIsSaved" />

        </div>
    </TransitionRoot>
</template>
<script setup>
import { TransitionRoot } from '@headlessui/vue'

const props = defineProps({
    dog: String
})

const imageIsSaved = ref(false);

if (process.client) {
    const uid = useState('guest-uid', getUid);
    const myDogs = useState(uid.value);
    if (Array.isArray(myDogs.value) && myDogs.value.includes(props.dog)) imageIsSaved.value = true;
}

const addSaveDog = async (url) => {
    const uid = useState('guest-uid', getUid);
    const myDogs = useState(uid.value);

    console.log('Attemting to write ti ' + uid.value)
    if (Array.isArray(myDogs.value) && !myDogs.value?.includes(url)) {
        resetIsShowing()
        myDogs.value.push(url)
        console.log('Writing dogs ' + myDogs.value.length)
        await useFetch('/api/write?key=' + uid.value, {
            method: 'post',
            body: myDogs.value
        });
        imageIsSaved.value = true;
    }
};

const isShowing = ref(true)

const resetIsShowing = () => {
    isShowing.value = false

    setTimeout(() => {
        isShowing.value = true
    }, 300)
}

</script>