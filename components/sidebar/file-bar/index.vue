<template>
  <aside class="min-w-[200px] w-[200px] bg-zinc-700 text-white">
    <!-- File Name -->
    <div class="bg-zinc-800 py-3 px-4 truncate m-2 rounded-md font-semibold">
      {{ folderDetail?.folderName }}
    </div>
    <!-- Files Bar -->
    <div class="p-2 space-y-2">
      <div v-for="(item, i) in folderDetail?.files" :key="i">
        <SidebarFileBarItem :name="item?.fileName" />
      </div>
    </div>
    <SidebarFileBarNew :folder-id="folderDetail?.folderId" />
  </aside>
  <div class="p-2 w-full overflow-y-auto">
    <NuxtPage />
  </div>
</template>
<script setup>
import { useFolderStore } from "@/store/folderStore";
import { ref } from "vue";
import { useRoute } from "vue-router";
const { $bus } = useNuxtApp();
const folders = useFolderStore();
const route = useRoute();
let folderDetail = ref(null);

onMounted(() => {
  folderDetail.value = folders.getFolderDetails(route?.fullPath.slice(1));
});

const getFolderDetail = (slug) => {
  folderDetail.value = folders.getFolderDetails(slug);
};

$bus.$on("update-sidebar", (slug) => {
  if (slug) {
    getFolderDetail(slug);
  } else {
    getFolderDetail(route?.fullPath.slice(1));
  }
});
</script>
<style lang=""></style>
