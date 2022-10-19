<template>
    <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        <AppSidebar />

        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <PartialsStats />

            <section aria-labelledby="section-1-title">
                <h2 class="sr-only" id="section-1-title">Page body</h2>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <div class="p-6">
                        <div class="md:flex md:items-center md:justify-between mb-8">
                            <div class="min-w-0 flex-1">
                                <h2 class="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                    Random Stream {{perPageDogs}}</h2>
                            </div>

                            <PartialsPerPage />
                        </div>
                        <ul role="list"
                            class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            <li v-for="dog in randomDogs" :key="dog" class="relative">
                                <PartialsDog :dog="dog" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script setup>
const perPageDogs = useState('per-page', () => 10)
const randomDogs = ref(await randomDogApi(perPageDogs.value));

watch(perPageDogs, async () => {
    let perPageParam = perPageDogs.value !== -1 ? perPageDogs.value : 50;
    randomDogs.value = await randomDogApi(perPageParam)
})

</script>
