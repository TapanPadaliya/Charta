<template>
  <NuxtLink :to="to" active-class="isActive">
    <div
      class="bg-zinc-600 p-2 text-black h-10 flex items-center justify-center"
    >
      {{ isActive }}
      <IconsChannel />
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
  icon: {
    type: String,
    default: "Channel",
  },
});
</script>
<style lang=""></style>
