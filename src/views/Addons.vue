<template>
  <Heading
            heading="pick add-ons "
            subHeading="Add-ons help enhance your gaming experience"
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
  <div class="flex justify-between w-96">
    <button class="text-cool-gray focus:outline-none font-bold">Go back</button>
    <Button class="bg-marine-blue" />
  </div>
</template>

<script setup lang="ts">
import FormCheckbox from "@/components/FormCheckbox.vue";
import Button from "@/components/Button.vue";
import Heading from "@/components/Heading.vue";
</script>

<style scoped></style>
