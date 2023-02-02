<template>
  <main class="py-48">
    <div class="bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <div class="flex space-x-24">
        <div class="w-1/3 pl-4 py-4">
          <LeftSideColoumn />
        </div>
        <div class="w-2/3 pr-4 py-10">
          <div class="pb-10">
            <Heading
              heading="Finishing Up"
              subHeading="Double-check everything looks OK befor confirming"
            />
          </div>
          <FinishingUpColumn />
          <div class="flex justify-between w-96 pt-24">
            <button class="text-cool-gray focus:outline-none font-bold">
              Go back
            </button>
            <Button class="bg-purplish-blue opacity-70" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import LeftSideColoumn from "@/components/LeftSideColoumn.vue";
import Heading from "@/components/Heading.vue";
import FinishingUpColumn from '@/components/FinishUpColumn.vue';
import Button from "@/components/Button.vue";
</script>
