<template>
  Folder Slug
  {{ route.fullPath }}
  <div>{{ folderDetail }}</div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useFolderStore } from "@/store/folderStore";

definePageMeta({
  layout: "private",
});
const route = useRoute();
const folders = useFolderStore();
const folderDetail = folders.getFolderDetails(route.fullPath.slice(22));
</script>
<style lang=""></style>
