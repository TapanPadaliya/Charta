<template>
  <div class="bg-zinc-950 private overflow-hidden">
    <div class="flex h-screen flex-row bg-zinc-300 transition-all duration-300">
      <SidebarServerBar />
      <SidebarChannelBar v-if="router.fullPath !== '/'" />
      <Welcome v-else class="w-full" />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
</script>

<style>
.private {
  font-family: "inter";
}
</style>
