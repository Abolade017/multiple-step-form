<template>
  <Heading
    heading="Select Your Plan"
    subHeading="You have the option of monthly or yearly billing"
  />
  <div class="pt-12 flex space-x-4 w-96">
    <Form-select
      :class="{ active: 'arcade' }"
      class="bg-magnolia"
      name="Arcade"
      price="$9/mo"
      duration="2 months free"
      @click="planSelected('arcade')"
    >
      <div
        class="rounded-full h-8 w-8 bg-orange-400 flex justify-center items-center"
      >
        <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" /></div
    ></Form-select>
    <Form-select
      class="bg-alabaster"
      :class="{ active: 'advanced' }"
      name="Advanced"
      price="$9/mo"
      duration="2 months free"
      @click="planSelected('advanced')"
    >
      <div
        class="rounded-full h-8 w-8 bg-strawberry-red opacity-75 flex justify-center items-center"
      >
        <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" /></div
    ></Form-select>
    <Form-select
      class="bg-white"
      :class="{ active: 'pro' }"
      name="Pro"
      price="$9/mo"
      duration="2 months free"
      @click="planSelected('pro')"
    >
      <div
        class="rounded-full h-8 w-8 bg-purplish-blue flex justify-center items-center"
      >
        <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" /></div
    ></Form-select>
  </div>

  <div class="pt-12">
    <div class="bg-magnolia rounded-md h-12 w-96 relative">
      <div class="absolute left-20 top-2">
        <div class="flex items-center space-x-4">
          <div><p class="text-marine-blue font-bold">Monthly</p></div>
          <div><Switch></Switch></div>
          <div><p class="text-cool-gray font-bold">Yearly</p></div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between w-96 pt-24">
    <button class="text-marine-blue focus:outline-none font-bold">
      Go back
    </button>
    <Button class="bg-marine-blue" />
  </div>
</template>

<style></style>
<script setup lang="ts">
import FormSelect from "@/components/FormSelect.vue";
import Button from "@/components/Button.vue";
import Switch from "@/components/icons/SwitchButton.vue";
import Heading from "@/components/Heading.vue";
import { ref, computed, onMounted } from "vue";
const arcade = ref(false);
const pro = ref(false);
const advanced = ref(false);
// methods
function planSelected(plan: string): any {
  if (plan === "arcade") {
    arcade.value = true;
  } else if (plan === "pro") {
    pro.value = true;
  } else if (plan === "advanced") {
    advanced.value = true;
  }
}
</script>
<style scoped>
.active {
  border-color: hsl(243, 100%, 62%);
}
</style>
