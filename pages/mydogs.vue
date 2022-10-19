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
                                    My Dogs: {{myDogs.length}}</h2>
                            </div>
                        </div>
                        <ul role="list"
                            class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            <li v-for="dog in myDogs" :key="dog" class="relative">
                                <div
                                    class="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 cursor-pointer">
                                    <PartialsImage :url="dog"
                                        class="object-fill object-center hover:object-scale-down pointer-events-none group-hover:opacity-75 h-20" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script setup>
const fingerprint = useState('guest-fingerprint', () => 'guest');
const myDogs = useState(fingerprint.value, () => []);
</script>
