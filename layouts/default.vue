<template>
    <div class="min-h-full">
        <AppHeader />
        <main class="-mt-24 pb-8">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
