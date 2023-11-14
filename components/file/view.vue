<template>
  <div class="h-full">
    <div
      class="border-4 rounded-md border-zinc-700 p-2 max-h-[calc(100vh-85px)] overflow-y-scroll overflow-hidden"
    >
      <div v-html="details" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Define Props
defineProps(["details"]);
</script>
