<template>
    <div class="py-4" v-for="checkbox in chechboxes" :key="checkbox"> 
        <InputForm class="pt-10 border border-purplish-blue rounded-md h-14"/>
    </div>
</template>
<script setup lang="ts">
import InputForm from './InputForm.vue';
</script>
