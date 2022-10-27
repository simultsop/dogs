<template>
    <div class="grid grid-cols-1 gap-4">
        <section aria-labelledby="section-2-title">
            <h2 class="sr-only" id="section-2-title">Section title</h2>
            <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                    <div class="w-full max-w-md px-2 sm:px-0">
                        <ClientOnly>
                            <TabGroup>
                                <TabList class="flex space-x-1 rounded-xl p-1">
                                    <Tab v-for="tabLabel in tabs" as="template" :key="tabLabel" v-slot="{ selected }">
                                        <button :class="[
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-400 hover:bg-white hover:text-blue',
                                        ]">
                                            {{tabLabel}}
                                        </button>
                                    </Tab>
                                </TabList>

                                <TabPanels class="mt-2">
                                    <TabPanel v-for="tab in Object.keys(tabs)" :key="tab" :class="[
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    ]">
                                        <component :is="tabComponents[tab]" />
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
const onlineUsers = useState('onlineUsers')

const tabs = ref({
    filter: "Filter",
    share: `Share (${onlineUsers.value})`,
    save: "Save"
})

const tabComponents = {
    filter: resolveComponent('TabsFilter'),
    share: resolveComponent('TabsShare'),
    save: resolveComponent('TabsSave'),
}

</script>
