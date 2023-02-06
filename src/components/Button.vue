<template>
  <button
    type="submit"
    class=" h-12 w-28 rounded-md text-white capitalize opacity-85" @click="$router.go(1)"
  >
    next step
  </button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router=useRouter;
</script>
