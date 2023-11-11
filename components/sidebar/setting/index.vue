<template>
  <aside class="min-w-[200px] w-[200px] bg-zinc-700 text-white">
    <!-- File Name -->
    <div class="bg-zinc-800 py-3 px-4 truncate m-2 rounded-md">Settings</div>
    <!-- Files Bar -->
    <div class="p-2 space-y-2">
      <SidebarFileBarItem />
      <SidebarFileBarItem />
      <SidebarFileBarItem />
      <SidebarFileBarItem />
    </div>
  </aside>
  <div class="p-4 w-full">
    <NuxtPage />
  </div>
</template>
<script setup>
import { useFolderStore } from "@/store/folderStore";
import { useRoute } from "vue-router";
import { ref } from "vue";
const { $bus } = useNuxtApp();
const folders = useFolderStore();
const route = useRoute();
let folderDetail = ref(null);

onMounted(() => {
  // console.log("Inside Setting", route);
  // folderDetail.value = folders.getFolderDetails("tapan");
});

const getFolderDetail = (slug) => {
  folderDetail.value = folders.getFolderDetails(slug);
};

$bus.$on("update-sidebar", (slug) => {
  getFolderDetail(slug);
});
</script>
<style lang=""></style>
