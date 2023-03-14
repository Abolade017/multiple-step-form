<template>
  <div class="absolute shadow-lg top-28 rounded-lg bg-white  inset-x-5 md:hidden block">
  <div class="w-full  py-10 px-10">
    <div>
      <Heading heading="Finishing Up" subHeading="Double-check everything looks OK befor confirming" />
    </div>
    <div class="pt-10">
      <FinishingUpColumn />
    </div></div>
  </div>
  <div class="md:hidden justify-end pt-8 absolute -bottom-4 left-0 bg-white shadow-lg w-full h-24">

    <div class="flex justify-between w-96 ">
      <button class="text-cool-gray focus:outline-none font-bold" @click="$router.push({ name: 'addons' })
      ">Go back</button>
      <Button class="bg-purplish-blue opacity-70" />
    </div>
  </div>
  <div class="md:block hidden">

    <div>
      <Heading heading="Finishing Up" subHeading="Double-check everything looks OK befor confirming" />
    </div>
    <div class="pt-10">
      <FinishingUpColumn />
    </div>
    <div class="flex justify-between w-96 pt-24">
      <button class="text-cool-gray focus:outline-none font-bold" @click="$router.push({ name: 'addons' })
      ">Go back</button>
      <Button class="bg-purplish-blue opacity-70" />
    </div>
  </div>
</template>
<script setup lang="ts">
import FinishingUpColumn from "@/components/FinishUpColumn.vue";
import Button from "@/components/Button.vue";
import Heading from "@/components/Heading.vue";
import { useRouter } from "vue-router";
const router = useRouter;
</script>
