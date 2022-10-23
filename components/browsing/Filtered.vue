<template>
    <div>
        <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <li v-for="dog in dogsData" :key="dog" class="relative">
                <PartialsDog :dog="dog" />
            </li>
        </ul>
        <ControlsPagination v-if="perPageDogs!==-1" />
    </div>
</template>
<script setup lang="ts">
const currentPage = useState('currentPage', () => 1)
const perPageDogs = useState('per-page', () => 10)

onMounted(() => {
    currentPage.value = 1;
    perPageDogs.value = 10;
})

const dogsData = ref(await randomDogApi(perPageDogs.value));

watch(perPageDogs, async () => {
    currentPage.value = 1;
    let perPageParam = perPageDogs.value !== -1 ? perPageDogs.value : 50;
    await loadRandomDogs(perPageParam);

    if (perPageDogs.value === -1) {
        window.addEventListener('scroll', randomInfiniteScroll);
    } else {
        window.removeEventListener('scroll', randomInfiniteScroll);
    }
})

const randomInfiniteScroll = async () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        await loadRandomDogs(-1);
    }
}

const loadRandomDogs = async (perPageParam: number = 50) => {
    if (perPageParam !== -1) {
        dogsData.value = await randomDogApi(perPageParam)
    } else {
        dogsData.value = dogsData.value.concat(await randomDogApi(50))
    }
}

</script>
