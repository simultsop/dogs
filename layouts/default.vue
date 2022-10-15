<template>
    <div class="min-h-full">
        <TheHeader />

        <main class="-mt-24 pb-8">
            <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 class="sr-only">Page title</h1>
                <slot />
            </div>
        </main>

        <TheFooter />
    </div>
</template>