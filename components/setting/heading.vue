<template>
  <div
    class="bg-zinc-700 w-full flex items-center justify-center py-2 rounded-md"
  >
    <span class="text-white">{{ label }}</span>
  </div>
</template>
<script setup>
defineProps(["label"]);
</script>
