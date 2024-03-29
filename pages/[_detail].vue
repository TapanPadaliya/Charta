<template>
  <div class="text-xl text-gray-800">
    <div v-if="watchedId">
      <File />
    </div>
    <div v-else-if="folderDetail">
      <FolderLanding :detail="folderDetail" />
    </div>
    <span v-else>No Folder Found.</span>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useFolderStore } from "@/store/folderStore";
const { $bus } = useNuxtApp();
const watchedId = ref(null);
definePageMeta({
  layout: "private",
});
const route = useRoute();
const folders = useFolderStore();
const folderDetail = folders.getFolderDetails(route.fullPath.slice(1));

// Checking Selected Availablity
$bus.$on("show-details", (id) => {
  if (id) {
    watchedId.value = id;
  } else {
    watchedId.value = null;
  }
});
</script>
<style lang=""></style>
