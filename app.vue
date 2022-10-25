<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup>
if (process.client) {
    const uid = useState('guest-uid', getUid);
    const savedDogs = await myDogsApi(uid.value);
    useState(uid.value, () => savedDogs);
}
</script>