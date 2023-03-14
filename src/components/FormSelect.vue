<template>
  <div class="relative md:h-40 md:w-36 w-full h-20 rounded-md cursor-pointer">
    <div class="md:pl-4 pl-0 absolute md:top-6 top-3 ">
      <div class="flex md:flex-col flex-row space-x-4 md:space-x-0">
        <slot></slot>

        <div class="md:pt-7 pt-0 flex flex-col">
          <div class="text-marine-blue font-bold">{{ name }}</div>
          <div class="text-cool-gray font-semibold text-sm"> {{ price }}</div>
          <!-- <div class="text-marine-blue text-xs py-1"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";
interface Props {
  name: string;
  price: string;
  duration: string
}
const props = defineProps<Props>();
</script>


<style scoped></style>

