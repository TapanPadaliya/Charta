<template>
  <div
    @click="createNewFile()"
    class="bg-zinc-800 hover:bg-zinc-900 hover:cursor-pointer text-white gap-2 flex items-center justify-center py-2 mx-2 rounded-md transition-all duration-700"
  >
    <IconsPlus class="h-5 w-5 text-white" />
    <span> Create new File </span>
  </div>
</template>
<script setup>
import { useFolderStore } from "@/store/folderStore";
import { useFileStore } from "@/store/fileStore";
const { $bus } = useNuxtApp();
const folders = useFolderStore();
const files = useFileStore();
// Props
const folderId = defineProps(["folderId"]);

// Create New File
const createNewFile = () => {
  const name = prompt("Please enter your name for the file:");
  if (name) {
    const newFileId = folders.addFile(folderId?.folderId, name);
    const createFile = files.addFile(newFileId);
    $bus.$emit("update-sidebar");
  } else {
    alert("Please provide Proper Name");
  }
};
</script>
