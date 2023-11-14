<template>
  <NuxtLink :to="to" active-class="active-link">
    <div
      class="navitem hover:bg-zinc-600 text-black flex items-center justify-center w-12 h-12 mx-2 rounded-md transition-all duration-700"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
<script setup>
import { ref } from "vue";
const isActive = ref("");
defineProps({
  to: {
    type: String,
    default: "/",
  },
});
</script>
<style>
.active-link .image {
  @apply rounded-md bg-zinc-600;
}
.active-link .navitem {
  @apply rounded-md bg-zinc-600;
}
</style>
