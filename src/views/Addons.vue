<template>
  <div class="absolute shadow-lg top-28 rounded-lg bg-white  inset-x-5 md:hidden block">
    <div class="w-full  py-10 px-10">
  <Heading
            heading="pick add-ons "
            subHeading="Add-ons help enhance your gaming experience"
            class="pb-4"
          />

  <FormCheckbox
    title="Online services"
    subTitle="Access to multiplayer games"
    addons="+$1/mo"
  />
  <FormCheckbox
    title="Larger storage"
    subTitle="Extra 1TB of cloud save"
    addons="+$2/mo"
  />
  <FormCheckbox
    title="Customizable Profile"
    subTitle="custom theme on your profile"
    addons="+$2/mo"
  />
  </div>
  </div>
  <div class="md:hidden justify-end pt-8 absolute -bottom-10 left-0 bg-white shadow-lg w-full h-24">

  <div class="flex justify-between w-96 pt-0 pl-4 ">
    <button class="text-cool-gray focus:outline-none font-bold" @click="$router.go(-2)">Go back</button>
    <Button class="bg-marine-blue" />
  </div>
  </div>
  <div class="md:block hidden">

  <Heading
            heading="pick add-ons "
            subHeading="Add-ons help enhance your gaming experience"
            class="pb-4"
          />

  <FormCheckbox
    title="Online services"
    subTitle="Access to multiplayer games"
    addons="+$1/mo"
  />
  <FormCheckbox
    title="Larger storage"
    subTitle="Extra 1TB of cloud save"
    addons="+$2/mo"
  />
  <FormCheckbox
    title="Customizable Profile"
    subTitle="custom theme on your profile"
    addons="+$2/mo"
  />
  <div class="flex justify-between w-96 pt-24">
    <button class="text-cool-gray focus:outline-none font-bold" @click="$router.go(-2)">Go back</button>
    <Button class="bg-marine-blue" />
  </div>

  </div>
</template>

<script setup lang="ts">
import FormCheckbox from "@/components/FormCheckbox.vue";
import Button from "@/components/Button.vue";
import Heading from "@/components/Heading.vue";
import { useRouter } from "vue-router";
const router=useRouter

  
</script>

<style scoped></style>
