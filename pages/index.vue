<template>
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Homepage</h1>
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <AppSidebar />

            <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                <PartialsStats />

                <section aria-labelledby="section-1-title">
                    <h2 class="sr-only" id="section-1-title">Page body</h2>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                        <div class="p-6">
                            <div class="md:flex md:items-center md:justify-between mb-8">
                                <div class="min-w-0 flex-1">

                                    <h2
                                        class="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                        <template v-if="filters.length === 0">
                                            Casual
                                        </template>
                                        <template v-else>
                                            Breeds
                                            {{ filters.length }}
                                            <span
                                                class="inline-flex items-center rounded-full bg-indigo-100 py-0.5 pl-2 pr-0.5 text-xs font-medium text-indigo-700">
                                                Total results: {{ totalFiltered }}
                                                <button type="button"
                                                    class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white focus:outline-none"
                                                    @click.prevent="resetFilters">
                                                    <span class="sr-only">Remove small option</span>
                                                    <svg class="h-2 w-2" stroke="currentColor" fill="none"
                                                        viewBox="0 0 8 8">
                                                        <path stroke-linecap="round" stroke-width="1.5"
                                                            d="M1 1l6 6m0-6L1 7" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>
                                    </h2>
                                </div>

                                <ControlsPerPage />
                            </div>
                            <transition name="slide-fade">
                                <component :is="browsingComponents[browse]" :filters="filters" />
                            </transition>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const totalFiltered = useState('total-filtered', () => 0)
const filters = useState('filters', () => [])
const resetFilters = () => {
    filters.value = []
}

const browsingComponents = {
    filter: resolveComponent('BrowsingFiltered'),
    casual: resolveComponent('BrowsingCasual')
}

const browse = computed(() => {
    return filters.value.length > 0 ? 'filter' : 'casual'
})
</script>
<style scoped>
.slide-fade-enter-active {
    transition: all 4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
    transform: scale(0.01)
}
</style>