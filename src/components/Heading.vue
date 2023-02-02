<template>
  <div>
    <h1 class="text-3xl font-bold  text-marine-blue">{{ heading }}</h1>
    <p class="text-cool-gray pt-2">{{ subHeading }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  heading: String,
  subHeading: String,
});
</script>
<style scoped>
  
</style>
