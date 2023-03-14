<template>
  <div class="absolute shadow-lg top-28 rounded-lg bg-white  inset-x-5 md:hidden block">
    <div class="w-full  py-10 px-10">
      <Heading heading="Select Your Plan" subHeading="You have the option of monthly or yearly billing" />

      <div class="pt-12 flex flex-col md:flex-row md:space-x-4 space-x-0 space-y-4 md:space-y-0">
        <Form-select class="demo bg-magnolia px-4 ring-1" :class="{ active: arcade }" name="Arcade" price="$9/mo"
          @click="planSelected('A')">
          <div class="rounded-full h-8 w-8 bg-orange-400 flex justify-center items-center">
            <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" />
          </div>
        </Form-select>
        <Form-select :class="{ active: advanced }" class="demo bg-alabaster px-4 ring-1" name="Advanced" price="$9/mo"
          @click="planSelected('B')">
          <div class="rounded-full h-8 w-8 bg-strawberry-red opacity-75 flex justify-center items-center">
            <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" />
          </div>
        </Form-select>
        <Form-select :class="{ active: pro }" class="demo bg-white px-4 ring-1" name="Pro" price="$9/mo" @click="planSelected('C')">
          <div class="rounded-full h-8 w-8 bg-purplish-blue flex justify-center items-center">
            <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" />
          </div>
        </Form-select>
      </div>

      <div class="pt-12">
        <div class="bg-magnolia rounded-md md:h-12 h-14 md:w-96 relative">
          <div class="absolute left-0 md:left-20 top-3">
            <div class="flex items-center space-x-4 justify-center mx-10">
              <div>
                <p class="text-marine-blue font-bold">Monthly</p>
              </div>
              <div>
                <Switch></Switch>
              </div>
              <div>
                <p class="text-cool-gray font-bold">Yearly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="md:hidden justify-end pt-8 absolute -bottom-10 left-0 bg-white shadow-lg w-full h-24">
  <div class="flex justify-between items-center w-96 px-6">
        <button class="text-cool-gray focus:outline-none font-bold" @click="back()">
          Go back
        </button>
        <Button class="bg-marine-blue" />
      </div>
    </div>
  <div class="md:block hidden">
    <Heading heading="Select Your Plan" subHeading="You have the option of monthly or yearly billing" />

    <div class="pt-12 flex space-x-4 w-96">
      <Form-select class="demo bg-magnolia" :class="{ active: arcade }" name="Arcade" price="$9/mo"
        duration="2 months free" @click="planSelected('A')">
        <div class="rounded-full h-8 w-8 bg-orange-400 flex justify-center items-center">
          <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" />
        </div>
      </Form-select>
      <Form-select :class="{ active: advanced }" class="demo bg-alabaster" name="Advanced" price="$9/mo"
        duration="2 months free" @click="planSelected('B')">
        <div class="rounded-full h-8 w-8 bg-strawberry-red opacity-75 flex justify-center items-center">
          <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" />
        </div>
      </Form-select>
      <Form-select :class="{ active: pro }" class="demo bg-white" name="Pro" price="$9/mo" duration="2 months free"
        @click="planSelected('C')">
        <div class="rounded-full h-8 w-8 bg-purplish-blue flex justify-center items-center">
          <font-awesome-icon icon="fa-solid fa-gamepad" class="text-white" />
        </div>
      </Form-select>
    </div>

    <div class="pt-12">
      <div class="bg-magnolia rounded-md h-12 w-96 relative">
        <div class="absolute left-20 top-2">
          <div class="flex items-center space-x-4">
            <div>
              <p class="text-marine-blue font-bold">Monthly</p>
            </div>
            <div>
              <Switch></Switch>
            </div>
            <div>
              <p class="text-cool-gray font-bold">Yearly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between w-96 pt-24">
        <button class="text-marine-blue focus:outline-none font-bold" @click="back()">
          Go back
        </button>
        <Button class="bg-marine-blue" />
      </div>

  </div>
</template>
<script setup lang="ts">
import FormSelect from "@/components/FormSelect.vue";
import Button from "@/components/Button.vue";
import Switch from "@/components/icons/SwitchButton.vue";
import Heading from "@/components/Heading.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter;
const arcade = ref(false);
const pro = ref(false);
const advanced = ref(false);
// methods
function planSelected(box: string) {
  if (box === "A") {
    arcade.value = !arcade.value;
    console.log(arcade.value);
  } else if (box === "B") {
    advanced.value = !advanced.value;
    console.log(advanced.value);
  } else if (box === "C") {
    pro.value = !pro.value;
    console.log(advanced.value);
  }
}
function back() {
  console.log(useRouter);
}
</script>
<style scoped>
.active {
  border: solid 2px hsl(243, 100%, 62%);
  background-color: hsl(217, 100%, 97%);
  border-radius: 5px;
}

/* .demo{
  border: solid 2px hsl(217, 100%, 97%)
} */
.demo:hover {
  border: solid 2px hsl(243, 100%, 62%);
  border-radius: 5px;
}
</style>
