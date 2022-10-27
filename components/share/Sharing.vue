<template>
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 w-full">
        <h1 class="sr-only">Share your saved dogs</h1>
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-4 lg:gap-8">
            <div class="grid grid-cols-1 gap-4 lg:col-span-4">
                <section aria-labelledby="section-1-title">
                    <h2 class="sr-only" id="section-1-title">Share your saved dogs</h2>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                        <div class="p-6">
                            <div class="md:flex md:items-center md:justify-between mb-8">
                                <div class="min-w-0 flex-1">
                                    <h2
                                        class="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                        Sending to: {{String($route.query.uid).slice(-10)}}
                                        
                                        <span class="float-right">Total saved: {{myDogs?.length}}</span>
                                    </h2>
                                </div>
                            </div>
                            <ul role="list"
                                class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                <li v-for="dog in myDogs" :key="dog" class="relative">
                                    <div
                                        class="group aspect-w-10 aspect-h-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 cursor-pointer">
                                        <PartialsSelectDog :dog="dog" @click="selectedDog(dog)" />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <template v-if="uidMe===$route.query.uid">
                            <p class="p-5 w-full text-center">You can not share with yourself</p>
                        </template>
                        <button v-else class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full m-4" @click="sharing">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-left">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                            </svg>
                            Share selected
                        </button>
                    </div>
                </section>
            </div>            
        </div>

        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                class="flex min-h-full items-center justify-center p-4 text-center"
                >
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                    <DialogPanel
                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                    >
                    <DialogTitle
                        as="h3"
                        class="text-lg font-medium leading-6 text-gray-900"
                    >
                        Images shared successfully
                    </DialogTitle>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                        Your sharings will be send instantenously. You can continue browsing our content.
                        </p>
                    </div>

                    <div class="mt-4">
                        <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="closeModal"
                        >
                        Got it, thanks!
                        </button>
                    </div>
                    </DialogPanel>
                </TransitionChild>
                </div>
            </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
const router = useRouter();
const route = useRoute();
const isOpen = ref(false)
const uidMe = useState('guest-uid', getUid);
const sharingDogs = ref([])

const closeModal = async() => {
    const sharingUid = route.query.uid;
    const sharingADR = `/api/read?key=share-${sharingUid}`;
    const sharingRecords = await $fetch<any[]>(sharingADR);
    const sharingHistory = Array.isArray(sharingRecords) ? sharingRecords : []

    sharingHistory.push({
        from: uidMe.value,
        content: sharingDogs.value,
        timestamp: new Date().toISOString()
    })

    await $fetch(`/api/write?key=share-${sharingUid}`, {
        method: 'post',
        body: sharingHistory
    }).then(() => {
        isOpen.value = false
        router.push({ path: "/" });
    })
}

function openModal() {
  isOpen.value = true
}

const uid = useState('guest-uid', getUid);
const myDogs = useState(uid.value);

const selectedDog = function(dog: string) {
    if (!sharingDogs.value.includes(dog)) {
        sharingDogs.value.push(dog)
    }
}

const sharing = function() {
    openModal()
}
</script>
