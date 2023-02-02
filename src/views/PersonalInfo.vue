<script setup lang="ts">
import LeftSideColoumn from "@/components/LeftSideColoumn.vue";
import FormInput from "@/components/FormInput.vue";
import Heading from "@/components/Heading.vue";
</script>

<template>
  <main class="py-48">
    <div class="bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <div class="flex space-x-24">
        <div class="w-1/3 pl-4 py-4">
          <LeftSideColoumn />
        </div>
        <div class="w-2/3 pr-4 py-10">
          <div><Heading heading="Personal Info" subHeading="please provide your name, email address, and phone number"/></div>
          <FormInput />
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
