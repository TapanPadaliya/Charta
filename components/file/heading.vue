<template>
  <div
    class="bg-zinc-700 w-full flex items-center justify-between py-2 rounded-md px-5"
  >
    <div class="flex items-center gap-1">
      <IconsHash class="h-8 w-8 text-red-400" />
      <span class="text-white text-2xl">{{ label }}</span>
    </div>
    <slot />
  </div>
</template>
<script setup>
defineProps(["label"]);
</script>
