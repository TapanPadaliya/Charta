<template>
  <div class="text-xl text-gray-800">
    <div v-if="folderDetail">
      <FolderLanding :detail="folderDetail" />
    </div>
    <span v-else>No Folder Found</span>
    <div>
      <FileEdit />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useFolderStore } from "@/store/folderStore";

definePageMeta({
  layout: "private",
});
const route = useRoute();
const folders = useFolderStore();
const folderDetail = folders.getFolderDetails(route.fullPath.slice(1));
</script>
<style lang=""></style>
