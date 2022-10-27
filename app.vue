<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
if (process.client) {
    const onlineUsersUid = await $fetch<string[]>(`/api/read?key=onlineUsersUid`);
    const onlineUsersUidList = useState('onlineUsersUid', () => Array.isArray(onlineUsersUid) ? onlineUsersUid : [])

    const onlineUsers = Number(await $fetch<string>(`/api/read?key=onlineUsers`)) ?? 0;
    const onlineUsersCounter = useState('onlineUsers', () => onlineUsers)

    const uid = useState('guest-uid', getUid);
    const savedDogs = await myDogsApi(uid.value);
    useState(uid.value, () => savedDogs);

    onlineUsersUidList.value.push(uid.value)

    const onlineUsersPlusMe = onlineUsers + 1;
    await $fetch(`/api/write?key=onlineUsers`, {
        method: 'post',
        body: String(onlineUsersPlusMe)
    })
    onlineUsersCounter.value = onlineUsersPlusMe

    await $fetch(`/api/write?key=onlineUsersUid`, {
        method: 'post',
        body: onlineUsersUidList.value
    })

    window.addEventListener('beforeunload', async() => {
        const onlineUsersMinusMe = Number(onlineUsersCounter.value) - 1;
        await $fetch(`/api/write?key=onlineUsers`, {
            method: 'post',
            body: String(onlineUsersMinusMe)
        })

        onlineUsersCounter.value = onlineUsersMinusMe

        const uidIndex = onlineUsersUidList.value.indexOf(uid.value)

        if (uidIndex > -1) {
            onlineUsersUidList.value.splice(uidIndex, 1)
            await $fetch(`/api/write?key=onlineUsersUid`, {
                method: 'post',
                body: onlineUsersUidList.value
            })
        }

        clearInterval(check)
    })

    const check = setInterval(async() => {
        const onlineUsers = Number(await $fetch<string>(`/api/read?key=onlineUsers`)) ?? 0;
        onlineUsersCounter.value = onlineUsers

        const onlineUserslist = await $fetch<string[]>(`/api/read?key=onlineUsersUid`);
        if(Array.isArray(onlineUserslist)) onlineUsersUidList.value = onlineUserslist
    }, 1250)
}
</script>