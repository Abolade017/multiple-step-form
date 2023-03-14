<template>
  <label class="cursor-pointer">
    <div
      class="border border-light-gray rounded-md h-20 md:w-96 items-center my-4 bg-alabaster px-4"
    >
      <div class="flex justify-between items-center">
        <div class="flex space-x-2 md:space-x-6 items-center pt-4">
          <input
            type="checkbox"
            name=""
            id=""
            class="focus:bg-purplish-blue"
            v-model="checked"
          />
          <span class="checkmark"></span>
          <div class="flex flex-col">
            <p class="text-marine-blue font-bold text-sm">{{ title }}</p>
            <p class="text-cool-gray text-sm">{{ subTitle }}</p>
          </div>
        </div>
        <div class="text-purplish-blue text-sm pt-2">{{ addons }}</div>
      </div>
    </div>
  </label>
</template>
<script setup lang="ts">
import { ref, defineProps } from "vue";
interface Props {
  title: string;
  subTitle: string;
  addons: string;
}
const props = defineProps<Props>();
const checked = ref(false);
</script>
<style scoped>
/* .active{
  background-color: hsl(243, 100%, 62%);
} */


</style>
