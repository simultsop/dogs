<template>
    <div class="mb-5">
        <template v-if="showAllBreeds">
            <label for="searchBreed" class="block text-sm font-medium text-gray-700">All breeds</label>
        </template>
        <template v-else>
            <label for="searchBreed" class="block text-sm font-medium text-gray-700">
                Search breed
                <template v-if="searchBreed !== ''">
                    (match: {{ userWantsToSeeBreeds.length }})
                </template>
            </label>
            <div class="relative mt-1 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-3 w-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>
                <input v-model="searchBreed" name="searchBreed" id="searchBreed"
                    class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Weimaraner" />
            </div>
        </template>
    </div>

    <form class="divide-y divide-gray-200">
        <template v-for="(breed, b) in userWantsToSeeBreeds" :key="breed">
            <div>
                <fieldset>
                    <div>
                        <div class="flex items-center">
                            <input type="checkbox" class="h-4 rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                                :id="breed" @change="toggleFilter(breed)" :checked="filters.includes(breed)" />
                            <label :for="breed" class="text-sm text-gray-600 capitalize">
                                {{ breed }}
                                <template v-if="breeds[breed].length > 0">
                                    ({{ breeds[breed].length }})
                                </template>
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <template v-if="filters.includes(breed) && breeds[breed].length > 0">
                <div v-for="(subBreed, sb) in breeds[breed]" :key="'sub-' + breed" class="ml-5">
                    <fieldset>
                        <div>
                            <div class="flex items-center">
                                <input type="checkbox" class="h-4 rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                                    :id="subBreed" @change="toggleFilter(subBreed)"
                                    :checked="filters.includes(subBreed)" />
                                <label :for="subBreed" class="text-sm text-gray-600 capitalize">
                                    {{ subBreed }}
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </template>
        </template>
        <button v-if="showAllBreeds === false" type="button" @click="showAllBreedsFn"
            class="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4">Show
            all</button>
        <button v-if="filters.length > 0" type="button" @click="resetFilters"
            class="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-2 mt-4">Reset</button>
    </form>
</template>
<script setup lang="ts">
const filters = useState<string[]>('filters', () => [])
const toggleFilter = async (filter: string) => {
    const filters = useState<string[]>('filters', () => [])
    if (filters.value.includes(filter)) {
        filters.value.splice(filters.value.indexOf(filter), 1);
    } else {
        const breedState = useState(`breed-${filter}`, () => []);
        if (breedState.value.length === 0) {
            const breedData = await breedDogsApi(filter);
            breedState.value = breedData;
        }

        filters.value.push(filter);
    }
};

const breeds = await dogBreedsApi()
const rootBreeds = computed(() => {
    return Object.keys(breeds)
})

const searchBreed = ref('')
const showAllBreeds = useState('showAllBreeds', () => false)

const userWantsToSeeBreeds = computed(() => {
    if (showAllBreeds.value && searchBreed.value === '') {
        return rootBreeds.value;
    }

    if (searchBreed.value !== '') {
        return rootBreeds.value.filter((breed) => {
            return breed.toLowerCase().includes(searchBreed.value.toLowerCase());
        })
    }

    return rootBreeds.value.slice(0, 10)
})

const showAllBreedsFn = () => {
    showAllBreeds.value = true;
    searchBreed.value = '';
}

const resetFilters = () => {
    filters.value = []
}
</script>