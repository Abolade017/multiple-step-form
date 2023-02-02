<template>
  <div
    class="relative h-36 w-32 rounded-md border border-light-gray hover:border-purplish-blue cursor-pointer"
  >
    <div class="pl-4 absolute top-6 ">
        <slot></slot>
      
      <div class="pt-7">
        <div class="text-marine-blue font-bold">{{ name }}</div>
        <div class="text-cool-gray font-semibold">{{ price }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  name: string;
  price: string;
}
const props = defineProps<Props>();
</script>
