<script setup lang="ts">
import { defineProps, reactive } from "vue";
// define props for the steps
// const props = defineProps({ no: Number, title: String });
interface Step {
  id: number
  step: string
  title: string
}
const steps: Step[] = reactive([
  {
    id: 1,
    step: "Step 1",
    title:"Your plan"
  },
  {
    id: 2,
    step: "Step 2",
    title:"Select Plan"
  },
  {
    id: 3,
    step: "Step 3",
    title: "Add-ons"
  },
  {
    id: 4,
    step: "Step 4",
    title: "Summary"
  },
]);
</script>

<template>
  <div class="bg-image h-full p-6">
    <div class="flex flex-col space-y-10">
      <div class="flex space-x-4 " v-for="step in steps" :key="step.id">
        <button
          class="rounded-full h-10 w-10 bg-light-blue opacity-80 flex justify-center items-center"
        >
          <div class="items-center h-6 font-semibold text-marine-blue" no="">
            {{ step.id }}
          </div>
        </button>
        <div class="flex flex-col h-10 cursor-pointer">
          <div class="uppercase text-light-gray text-sm">{{ step.step }}</div>
          <div class="uppercase text-white font-semibold text-sm">
            {{ step.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url("../assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
