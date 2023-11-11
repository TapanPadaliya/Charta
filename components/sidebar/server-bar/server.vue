<template>
  <div v-for="(server, i) in servers.getAllServers">
    <SidebarServerBarItem :to="`/${server?.serverSlug}`">
      <template #default>
        <img
          v-if="server?.serverImageUrl"
          :src="server?.serverImageUrl"
          class="image h-10 w-10 rounded-3xl hover:rounded-md transition-all duration-200"
        />
        <IconsChannel v-else class="h-10 w-10 text-white" />
      </template>
    </SidebarServerBarItem>
  </div>
</template>
<script setup>
import { useServerStore } from "@/store/serverStore";
const servers = useServerStore();
</script>
<style lang=""></style>
