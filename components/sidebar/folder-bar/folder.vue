<template>
  <div v-if="folders.getAllFolders.length">
    <div v-for="(folder, i) in folders.getAllFolders">
      <button @click="updateSidebar(folder?.folderSlug)">
        <SidebarFolderBarItem :to="`/${folder?.folderSlug}`">
          <template #default>
            <img
              v-if="folder?.folderImageUrl"
              :src="folder?.folderImageUrl"
              class="image h-10 w-10 rounded-3xl hover:rounded-md transition-all duration-200"
            />
            <IconsFile v-else class="h-10 w-10 text-white" />
          </template>
        </SidebarFolderBarItem>
      </button>
    </div>
  </div>
  <div v-else>
    <SidebarFolderBarNew />
  </div>
</template>
<script setup>
import { useFolderStore } from "@/store/folderStore";
const { $bus } = useNuxtApp();
const folders = useFolderStore();
const updateSidebar = (slug) => {
  $bus.$emit("update-sidebar", slug);
};
</script>
<style lang=""></style>
