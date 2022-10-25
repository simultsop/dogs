<template>
    <div>
        <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <li v-for="dog in browsingDogs" :key="dog" class="relative">
                <PartialsDog :dog="dog" />
            </li>
        </ul>
        <ControlsPagination v-if="perPageDogs !== -1 && maximumPages > 1" :max="maximumPages" />
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    filters: [String]
})

const currentPage = useState('currentPage', () => 1)
const perPageDogs = useState('per-page', () => 10)
const dogsData = ref([]);
const totalFiltered = useState('total-filtered', () => 0)

onMounted(() => {
    currentPage.value = 1;
    perPageDogs.value = 10;

    for (const filter of props.filters) {
        const filterData = useState(`breed-${filter}`, () => []);
        dogsData.value = dogsData.value.concat(filterData.value);
    }

    totalFiltered.value = dogsData.value.length;
})

watch(perPageDogs, async () => {
    currentPage.value = 1;
})

const endIndex = computed(() => {
    return currentPage.value * perPageDogs.value;
})

const startIndex = computed(() => {
    return endIndex.value - perPageDogs.value;
})

watch(props.filters, async () => {
    dogsData.value = [];
    for (const filter of props.filters) {
        const filterData = useState(`breed-${filter}`, () => []);
        dogsData.value = dogsData.value.concat(filterData.value);
    }
    totalFiltered.value = dogsData.value.length;
})

const browsingDogs = computed(() => {
    return dogsData.value.slice(startIndex.value, endIndex.value);
})

const maximumPages = computed(() => {
    return Math.floor(dogsData.value.length / perPageDogs.value);
})

</script>
