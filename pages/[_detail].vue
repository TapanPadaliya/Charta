<template>
  <div class="text-xl text-gray-800">
    <span v-if="serverDetail">{{ serverDetail.serverName }}</span>
    <span v-else>No Server Found</span>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useServerStore } from "@/store/serverStore";

definePageMeta({
  layout: "private",
});
const route = useRoute();
const servers = useServerStore();
const serverDetail = servers.getServerDetails(route.fullPath.slice(1));
</script>
<style lang=""></style>
