<template>
    <Popover as="header" class="bg-indigo-600 pb-24" v-slot="{ open }">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="relative flex items-center justify-center py-5 lg:justify-between">
                <div class="absolute left-0 flex-shrink-0 lg:static">
                    <a href="#">
                        <span class="sr-only">Dogs</span>
                        <PartialsLogo />
                    </a>
                </div>
            </div>
        </div>

        <TransitionRoot as="template" :show="open">
            <div class="lg:hidden">
                <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <PopoverOverlay class="fixed inset-0 z-20 bg-black bg-opacity-25" />
                </TransitionChild>

                <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="duration-150 ease-in" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <PopoverPanel focus
                        class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition">
                        <div
                            class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div class="pt-3 pb-2">
                                <div class="flex items-center justify-between px-4">
                                    <div>
                                        <PartialsLogo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </TransitionChild>
            </div>
        </TransitionRoot>
    </Popover>
</template>
<script setup>
import {
    Popover,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
</script>