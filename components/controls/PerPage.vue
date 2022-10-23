<template>
    <span class="isolate inline-flex rounded-md shadow-sm">
        <button v-for="n in [10, 25, 50, -1]" :key="`perPage${n}`" type="button" :class="perPageClass(n)"
            @click="switchPerPage(n)">{{n===-1 ? '∞' : n}}</button>
    </span>
</template>
<script setup lang="ts">
const perPage = useState('per-page', () => 10);
function switchPerPage(limit: number) {
    perPage.value = limit;
}

function perPageClass(limit: number): string {
    const firstItemClass = 'rounded-l-md';
    const lastItemClass = 'rounded-r-md';
    let baseClass = 'relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500';
    if (limit === 10) { baseClass += ` ${firstItemClass} ` }
    if (limit === -1) { baseClass += ` ${lastItemClass} ` }
    if (limit === perPage.value) { baseClass += ` bg-purple-700 text-white ` } else { baseClass += ` bg-white text-gray  hover:bg-gray-50 ` }


    return baseClass
}
</script>
