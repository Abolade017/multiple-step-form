<template>
  <main class="py-48">
    <div class="bg-white shadow-xl rounded-lg max-w-4xl mx-auto">
      <div class="flex space-x-10 h-full">
        <div class="w-1/3 pl-4 py-4">
          <LeftSideColoumn />
        </div>
        <div class="w-2/3 pr-4 py-10">
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
            <Button class="bg-marine-blue"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import LeftSideColoumn from "@/components/LeftSideColoumn.vue";
import Heading from "@/components/Heading.vue";
import FormCheckbox from "@/components/FormCheckbox.vue";
import Button from "@/components/Button.vue";
</script>

<style scoped></style>
