<template>
    <ClientOnly>
        <div v-for="user in onlineUsersUid" class="mb-5 pb-5 border-b-2">
            <NuxtLink v-if="user===uidMe" to="/share">
                <div class="flex items-center">
                    <div>
                        <img :src="avatars[user]" class="inline-block h-9 w-9 rounded-full" />
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">{{user.slice(-10)}} (Me)</p>
                        <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">Dogs shared with me</p>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink v-else :to="`/share?uid=`+user" class="group block flex-shrink-0">
                <div class="flex items-center">
                    <div>
                        <img :src="avatars[user]" class="inline-block h-9 w-9 rounded-full" />
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">{{user.slice(-10)}}</p>
                        <p v-if="user!=uidMe" class="text-xs font-medium text-gray-500 group-hover:text-gray-700">Share dogs</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </ClientOnly>
</template>
<script setup lang="ts">
    import gravatar from 'gravatar';
    const onlineUsersUid = useState<string[]>('onlineUsersUid');
    const avatars = ref<any>({});
    const uidMe = useState('guest-uid', getUid);

    for(const user in onlineUsersUid.value) {
        const userUid = onlineUsersUid.value[user];
        avatars.value[userUid] = await gravatar.url(`${userUid}@dogs.ceo`);
    }
</script>