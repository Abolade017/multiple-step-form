<template>
  <div class="pt-6 pr-20">
    <label>
      <div class="flex flex-col space-y-4">
        <div>
          <label for="name" class="capitalize font-semibold text-marine-blue">
            name</label
          >
          <input
            type="text"
            name=""
            id=""
            class="w-full rounded-md border border-gray-200 h-10 text-marine-blue"
            v-model="name"
          />
          <p class="p-2 text-strawberry-red">{{ name }}</p>
        </div>
        <div>
          <label for="email" class="capitalize font-semibold text-marine-blue">
            Email address</label
          >
          <input
            type="email"
            name=""
            id=""
            class="w-full rounded-md border border-gray-200 h-10 text-marine-blue"
            v-model="email"
          />
          <p class="p-2 text-strawberry-red">{{ email }}</p>
        </div>
        <div>
          <label for="" class="capitalize font-semibold text-marine-blue">
            Phone Number
          </label>
          <input
            type="tel"
            name=""
            id=""
            class="w-full rounded-md border border-gray-200 h-10 text-marine-blue"
            v-model="phone_no"
            placeholder="e.g. +1234567890"
          />
          <p class="p-2 text-strawberry-red">{{ phone_no }}</p>
        </div>
        <div class="flex justify-end pt-20 ">
<Button class="bg-marine-blue"/>        
    </div>
      </div>
    </label>
  </div>
</template>
<script setup lang="ts">
import Button from "./Button.vue";
import { ref } from "vue";
const email = ref<string>("");
email.value = "";
const name = ref<string>("");
name.value = "";
const phone_no = ref<string | number>("");
phone_no.value = "";
</script>
<style scoped>
input:focus {
  border-color: "hsl(243, 100%, 62%)";
}
</style>
