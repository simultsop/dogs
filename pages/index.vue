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
                                    Random Stream</h2>
                            </div>

                            <span class="isolate inline-flex rounded-md shadow-sm">
                                <button type="button"
                                    class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">10</button>
                                <button type="button"
                                    class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">25</button>
                                <button type="button"
                                    class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">50</button>
                                <button type="button"
                                    class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">∞</button>
                            </span>
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
const randomDogs = await randomDogApi(16)
</script>
