<template>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a v-if="currentPage != 1" href="#" @click.prevent="goBack"
                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        <span class="sr-only">Previous</span>
                        <!-- Heroicon name: mini/chevron-left -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->

                    <template v-if="max <= 10">
                        <a v-for="n in max" :key="'page' + n" href="#" aria-current="page" :class="pageClass(n)"
                            @click.prevent="goPage(n)">{{ n }}</a>
                    </template>
                    <template v-else>
                        <a v-if="currentPage <= maxLead" href="#" aria-current="page" :class="pageClass(currentPage)"
                            @click.prevent="goPage(currentPage)">{{ currentPage }}</a>

                        <a v-for="ln of leadingPages()" href="#" aria-current="page" :class="pageClass(ln)"
                            @click.prevent="goPage(ln)">{{ ln }}</a>

                        <a href="#" aria-current="page" :class="pageClass(9999999)">...</a>

                        <a v-if="currentPage > maxLead && currentPage < (max - 3)" href="#" aria-current="page"
                            :class="pageClass(currentPage)" @click.prevent="goPage(currentPage)">{{ currentPage }}</a>

                        <a v-for="rn of [3, 2, 1]" href="#" aria-current="page" :class="pageClass(max - rn)"
                            @click.prevent="goPage(max - rn)">{{ max - rn }}</a>

                        <a href="#" aria-current="page" :class="pageClass(max)" @click.prevent="goPage(max)">{{ max
                        }}</a>
                    </template>

                    <a v-if="currentPage != max" href="#" @click.prevent="goNext"
                        class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        <span class="sr-only">Next</span>
                        <!-- Heroicon name: mini/chevron-right -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    max: {
        type: Number,
        default: 10
    }
})
const maxLead = ref(Math.floor(props.max / 2))
const currentPage = useState('currentPage', () => 1)

const goNext = () => {
    currentPage.value++;
}

const goBack = () => {
    if ((currentPage.value - 1) > 0) {
        currentPage.value--;
    }
}

const goPage = (page: number) => {
    currentPage.value = page;
}

const leadingPages = (): number[] => {
    if (currentPage.value > maxLead.value) {
        return [maxLead.value - 3, maxLead.value - 2, maxLead.value - 1]
    } else {
        return [currentPage.value + 1, currentPage.value + 2, currentPage.value + 3]
    }
}

function pageClass(page: number): string {
    let baseClass = 'relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium focus:z-20';
    if (page === currentPage.value) { baseClass += ` bg-purple-700 text-white ` } else { baseClass += ` bg-white text-gray-500  hover:bg-gray-50 ` }

    return baseClass
}
</script>