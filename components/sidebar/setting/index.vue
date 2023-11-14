<template>
  <aside class="min-w-[200px] w-[200px] bg-zinc-700 text-white">
    <!-- File Name -->
    <div
      class="bg-zinc-800 py-3 px-4 truncate m-2 rounded-md text-xl flex items-center gap-2"
    >
      <IconsSetting class="h-8 w-8" />
      <span>Settings</span>
    </div>
    <!-- Files Bar -->
    <div class="px-2 space-y-2">
      <div v-for="(item, i) in navigation" :key="i">
        <SidebarSettingItem :to="item.to" :name="item.name" />
      </div>
    </div>
    <NuxtLink to="/">
      <div
        class="absolute bottom-0 w-[184px] my-2 mx-2 bg-zinc-800 rounded px-2 py-1 flex items-center gap-2 font-normal"
      >
        <IconsArrowLeft class="h-5 w-5" />
        Go Back To Home
      </div>
    </NuxtLink>
  </aside>
  <div class="p-4 w-full overflow-y-auto">
    <NuxtPage />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const navigation = [
  { to: "/settings/profile", name: "Users" },
  { to: "/settings/folder", name: "Folder" },
  { to: "/settings/files", name: "Files" },
  { to: "/settings/system-settings", name: "System" },
];
</script>
<style lang=""></style>
