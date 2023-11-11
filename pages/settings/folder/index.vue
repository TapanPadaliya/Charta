<template>
  <div>
    <SettingHeading label="Folders" />
    <div class="my-2">
      <div
        v-for="(folder, i) in folders.getAllFolders"
        :key="i"
        class="flex gap-2"
      >
        <img
          v-if="folder?.folderImageUrl"
          :src="folder?.folderImageUrl"
          class="h-5 w-5 rounded-md"
        />
        <span>{{ folder?.folderSlug }}</span>
        <button @click="removeFolder(folder.folderId)" class="text-red-400">
          Remove
        </button>
      </div>

      <form @submit.prevent="addFolder">
        <label>
          Folder Name:
          <input v-model="newFolderName" required />
        </label>
        <label>
        Folder Image Url:
          <input v-model="newFolderImage" />
        </label>
        <button type="submit">Add Folder</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { useFolderStore } from "@/store/folderStore";
definePageMeta({
  layout: "private",
});

definePageMeta({
  layout: "private",
});

const folders = useFolderStore();
const newFolderName = ref("");
const newFolderImage = ref("");

const addFolder = () => {
  folders.addFolder(newFolderName.value, newFolderImage.value);
  // Clear the input fields after adding a folder
  newFolderName.value = "";
  newFolderImage.value = "";
};

const removeFolder = (folderId) => {
  folders.removeFolder(folderId);
};
</script>
