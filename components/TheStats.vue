<template>
    <div>
        <dl
            class="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
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
</template>
<script setup>
const onlineUsers = useState('onlineUsers', () => 1)

const stats = [
    { name: 'Online users', stat: onlineUsers },
    { name: 'Photos', stat: '11.342' },
    { name: 'Activities', stat: '20K' },
]
</script>
