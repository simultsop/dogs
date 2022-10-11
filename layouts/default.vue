<template>
    <div class="min-h-full">
        <TheHeader />

        <main class="-mt-24 pb-8">


            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 class="sr-only">Page title</h1>
                <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                    <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                        <div>
                            <dl
                                class="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
                                <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
                                    <dt class="text-base font-normal text-gray-900">{{ item.name }}</dt>
                                    <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
                                        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
                                            {{ item.stat }}
                                        </div>

                                    </dd>
                                </div>
                            </dl>
                        </div>


                        <section aria-labelledby="section-1-title">
                            <h2 class="sr-only" id="section-1-title">Page body</h2>
                            <div class="overflow-hidden rounded-lg bg-white shadow">
                                <div class="p-6">
                                    <div>
                                        <slot />

                                        <!-- <Redis/> -->
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>



                    <TheSidebar />
                </div>
            </div>
        </main>

        <TheFooter />
    </div>

</template>


<script setup>
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'
import Redis from '~~/components/Redis.vue';

const onlineUsers = useState('onlineUsers', () => 1)

const stats = [
    { name: 'Online users', stat: onlineUsers },
    { name: 'Photos', stat: '11.342' },
    { name: 'Activities', stat: '20K' },
]
</script>