<template>
    <div class="overflow-hidden rounded-lg ">
        <div class="p-2">
            <ul role="list"
                class="grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                <li v-for="dog in myDogs.slice(0,6)" :key="dog" class="relative">
                    <PartialsDog :dog="dog" />
                </li>
            </ul>
        </div>

        <button v-if="myDogs.length>6" type="button" @click="goToMyDogs"
            class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-6 w-full">
            Browse all {{myDogs.length}}
        </button>
    </div>
</template>
<script setup>
const uid = useState('guest-uid', getUid);
const myDogs = useState(uid.value, () => []);
const router = useRouter();
const goToMyDogs = () => {
    router.push({ path: "/mydogs" });
}
</script>