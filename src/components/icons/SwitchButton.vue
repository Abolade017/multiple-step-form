<template>
    <div class="">
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-marine-blue' : 'bg-marine-blue opacity-80'"
        class="relative inline-flex h-[32px] w-[74px] shrink-0 cursor-pointer bg-marine-blue rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-0' : 'translate-x-9'"
          class="pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Switch } from '@headlessui/vue'
  
  const enabled = ref(false)
  </script>
  
  
  
   