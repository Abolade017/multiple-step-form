<template>
  <div
    class="relative h-40 w-36 rounded-md border border-light-gray hover:border-purplish-blue cursor-pointer"
  >
    <div class="pl-4 absolute top-6 ">
        <slot></slot>
      
      <div class="pt-7">
        <div class="text-marine-blue font-bold">{{ name }}</div>
        <div class="text-cool-gray font-semibold text-sm">{{ price }}</div>
        <div class="text-marine-blue text-xs py-1">{{ duration }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  name: string;
  price: string;
  duration:string
}
const props = defineProps<Props>();
</script>
