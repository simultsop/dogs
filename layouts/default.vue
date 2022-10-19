<template>
    <div class="min-h-full">
        <AppHeader />

        <main class="-mt-24 pb-8">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 class="sr-only">Page title</h1>
                <slot />
            </div>
        </main>

        <AppFooter />
    </div>
</template>
<script setup>
import FingerprintJS from '@fingerprintjs/fingerprintjs'
const fpPromise = FingerprintJS.load({ monitoring: false })

const fingerprint = useState('guest-fingerprint', () => 'guest');



; (async () => {
    const fp = await fpPromise
    const result = await fp.get()
    fingerprint.value = result.visitorId;

    const myDogs = await myDogsApi(fingerprint.value) ?? []
    console.log("Updating fingerprintstate")
    console.log(myDogs)
    useState(fingerprint.value, () => myDogs);
})()

</script>