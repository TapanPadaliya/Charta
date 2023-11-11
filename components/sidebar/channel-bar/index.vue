<template>
  <aside class="min-w-[200px] w-[200px] bg-zinc-700 text-white">
    <!-- Channel Name -->
    <div class="bg-zinc-800 py-3 px-4 truncate m-2 rounded-md">
      {{ serverDetail?.serverName }}
    </div>
    <!-- Channels Bar -->
    <div class="p-2 space-y-2">
      <SidebarChannelBarItem />
      <SidebarChannelBarItem />
      <SidebarChannelBarItem />
      <SidebarChannelBarItem />
    </div>
  </aside>
  <div class="p-4">
    <NuxtPage />
  </div>
</template>
<script setup>
import { useServerStore } from "@/store/serverStore";
import { ref } from "vue";
const { $bus } = useNuxtApp();
const servers = useServerStore();

let serverDetail = ref(null);

onMounted(() => {
  serverDetail.value = servers.getServerDetails("tapan");
});

const getServerDetail = (slug) => {
  serverDetail.value = servers.getServerDetails(slug);
};

$bus.$on("update-sidebar", (slug) => {
  getServerDetail(slug);
});
</script>
<style lang=""></style>
