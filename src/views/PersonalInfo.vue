<script setup lang="ts">
import FormInput from "@/components/FormInput.vue";
import Heading from "@/components/Heading.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="absolute shadow-lg top-28 rounded-lg bg-white px-10 inset-x-5 md:hidden block">
    <div class="w-full  py-10 ">

      <div>
        <Heading heading="Personal Info" subHeading="please provide your name, email address, and phone number" />
      </div>

      <FormInput />

    </div>
  </div>
  <div class=" md:block hidden w-2/3">
    <div class="w-full  py-10 ">

      <div>
        <Heading heading="Personal Info" subHeading="please provide your name, email address, and phone number" />
      </div>

      <FormInput />

    </div>
  </div>

  <div class="md:hidden justify-end pt-20 absolute -bottom-10 left-0 bg-white shadow-lg w-full h-24 ">
    <Button class="bg-marine-blue absolute bottom-6  right-4" />
  </div>
</template>
<style scoped></style>
