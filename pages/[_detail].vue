<template>
  <div class="text-xl text-gray-800">
    <span v-if="folderDetail">{{ folderDetail.folderName }}</span>
    <span v-else>No Folder Found</span>
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
