<template>
  <div>
    <Heading
      heading="Finishing Up"
      subHeading="Double-check everything looks OK befor confirming"
    />
  </div>
  <div class="pt-10">
    <FinishingUpColumn />
  </div>
  <div class="flex justify-between w-96 pt-24">
    <button class="text-cool-gray focus:outline-none font-bold" @click="$router.push({name:'addons'})
    ">Go back</button>
    <Button class="bg-purplish-blue opacity-70" />
  </div>
</template>
<script setup lang="ts">
import FinishingUpColumn from "@/components/FinishUpColumn.vue";
import Button from "@/components/Button.vue";
import Heading from "@/components/Heading.vue";
import { useRouter } from "vue-router";
const router=useRouter;
</script>
