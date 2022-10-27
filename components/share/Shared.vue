<template>
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 w-full">
        <h1 class="sr-only">Shared with me</h1>
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-4 lg:gap-8">
            <div class="grid grid-cols-1 gap-4 lg:col-span-4">
                <section aria-labelledby="section-1-title">
                    <h2 class="sr-only" id="section-1-title">Browse your saved dogs</h2>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                        <div class="p-6">
                            <div class="md:flex md:items-center md:justify-between mb-8">
                                <div class="min-w-0 flex-1">
                                    <h2
                                        class="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                        Shared with me
                                        <span class="float-right">Total shared: {{sharedHistory?.length}}</span>
                                    </h2>
                                    <template v-if="sharedHistory.length===0">
                                        No activity yet.
                                    </template>
                                    <template v-else>
                                        <div>
                                            <ul role="list" class="divide-y divide-gray-200">
                                            <li v-for="shareItem in sharedHistory" class="py-4">
                                                <div class="flex space-x-3">
                                                <img class="h-6 w-6 rounded-full" :src="avatars[shareItem.from]" alt="" />
                                                <div class="flex-1 space-y-1">
                                                    <div class="flex items-center justify-between">
                                                    <h3 class="text-sm font-medium">{{ shareItem.from.slice(-10) }}</h3>
                                                    <p class="text-sm text-gray-500">{{ shareItem.timestamp }}</p>
                                                    </div>
                                                    <p class="text-sm text-gray-500">Shared content</p>
                                                    <template v-if="shareItem.content.length>0">
                                                        <template v-for="file in shareItem.content" :key="file" class="relative">
                                                            <img :src="file" alt="" class="w-16 h-16 mr-4 float-left" />
                                                        </template>
                                                    </template>
                                                </div>
                                                </div>
                                            </li>
                                            </ul>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import gravatar from 'gravatar';
const avatars = ref<any>({});
const sharedHistory = ref([]);
onMounted(async() => {
    const uidMe = useState('guest-uid', getUid);
    const sharedWithMeADR = `/api/read?key=share-${uidMe.value}`;
    const sharedRecords = await $fetch<any[]>(sharedWithMeADR);
    sharedHistory.value = Array.isArray(sharedRecords) ? sharedRecords : []

    for(const share in sharedHistory.value) {
        const userUid = sharedHistory.value[share].from;
        avatars.value[userUid] = await gravatar.url(`${userUid}@dogs.ceo`);
    }
})

</script>
