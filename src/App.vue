<template>
  <main class="py-0 md:py-48">
    <div class="md:bg-white shadow-none md:shadow-md  rounded-none md:rounded-lg w-full md:max-w-6xl md:mx-auto mx-0">
      <div class="flex md:flex-row flex-col  items-center md:items-start pl-0 md:pl-6  ">
        <div class="w-full pt-0 block md:hidden relative ">
          <div class="mobile-bg-image h-full pt-10 px-24 pb-28">
            <div class="flex flex-row space-x-4 md:space-x-0 space-y-0 md:flex-col md:space-y-10">
              <div class="flex space-x-4" v-for="step in steps" :key="step.id">
                <button :class="{ active: 'step.value=!step.value' }"
                  class="rounded-full h-10 w-10 border opacity-80 flex justify-center items-center"
                  @click="currentTab = step.compo">
                  <div class="items-center h-6 font-semibold text-marine-blue" no="">
                    {{ step.id }}
                  </div>
                </button>
                <div class="md:flex flex-col h-10 cursor-pointer hidden" @click="currentTab = step.compo">
                  <div class="uppercase text-light-gray text-sm">
                    {{ step.step }}
                  </div>
                  <div class="uppercase text-white font-semibold text-sm">
                    {{ step.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:hidden ">
          <div class="w-full  py-10 ">
            <KeepAlive>
              <component :is="tabs[currentTab as keyof typeof tabs]"></component>
            </KeepAlive>
          </div>
        </div>
        <div class="w-1/3 py-4 md:block hidden">
          <div class="bg-image  py-10 pl-0 md:px-6 ">
            <div class="pb-64">
              <div class="flex flex-col space-y-10">
                <div class="flex space-x-4" v-for="step in steps" :key="step.id">
                  <button :class="{ active: 'step.value=!step.value' }"
                    class="rounded-full h-10 w-10 border opacity-80 flex justify-center items-center"
                    @click="currentTab = step.compo">
                    <div class="items-center h-6 font-semibold text-marine-blue" no="">
                      {{ step.id }}
                    </div>
                  </button>
                  <div class="flex flex-col h-10 cursor-pointer" @click="currentTab = step.compo">
                    <div class="uppercase text-light-gray text-sm">
                      {{ step.step }}
                    </div>
                    <div class="uppercase text-white font-semibold text-sm">
                      {{ step.title }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/3  p-10 md:block hidden">
          <KeepAlive>
            <component :is="tabs[currentTab as keyof typeof tabs]"></component>
          </KeepAlive>
        </div>

      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import Heading from "./components/Heading.vue";
import Button from "./components/Button.vue";
import Addons from "./views/Addons.vue";
import FinishingUp from "./views/FinishingUp.vue";
import SelectYourPlan from "./views/SelectYourPlan.vue";
import PersonalInfo from "./views/PersonalInfo.vue";
import { useRouter } from "vue-router";

interface Step {
  id: number;
  step: string;
  title: string;
  compo: string;
}
const steps: Step[] = reactive([
  {
    id: 1,
    step: "Step 1",
    title: "Your plan",
    compo: "PersonalInfo",
    value: false
  },
  {
    id: 2,
    step: "Step 2",
    title: "Select Plan",
    compo: "SelectYourPlan",
    value: false
  },
  {
    id: 3,
    step: "Step 3",
    title: "Add-ons",
    compo: "Addons",
    value: false
  },
  {
    id: 4,
    step: "Step 4",
    title: "Summary",
    compo: "FinishingUp",
    value: false

  },
]);
const tabs = reactive({
  PersonalInfo,
  SelectYourPlan,
  Addons,
  FinishingUp,
});
const currentTab = ref("PersonalInfo");
const router = useRouter;


</script>

<style scoped>
.bg-image {
  background-image: url("./assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: contain;

}

.active {
  background-color: hsl(206, 94%, 87%);
}

.mobile-bg-image {
  background-image: url('./assets/images/bg-sidebar-mobile.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
