<template>
    <form class="divide-y divide-gray-200">
        <input v-if="!showAllBreeds" placeholder="Search breed..." />
        <div v-for="(breed, b) in Object.keys(breeds)" :key="breed" v-show="b<20 || showAllBreeds">
            <fieldset>
                <div>
                    <div class="flex items-center">
                        <input type="checkbox" class="h-4 rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                            :id="breed" />
                        <label :for="breed" class="text-sm text-gray-600 capitalize">
                            {{ breed }}
                        </label>
                    </div>
                </div>
            </fieldset>
        </div>
        <button v-if="showAllBreeds===false" type="button" @click="showAllBreeds=true"
            class="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Show
            all</button>

    </form>
</template>
<script setup>
const breeds = await dogBreedsApi()
const showAllBreeds = useState('showAllBreeds', () => false)
</script>