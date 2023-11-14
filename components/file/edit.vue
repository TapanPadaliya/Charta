<template>
  <div class="">
    <QuillEditor
      v-model:content="dataField"
      toolbar="full"
      contentType="html"
      class="border border-zinc-900 rounded-md z-30"
      @update:content="saveContent"
    />
  </div>
  <div
    class="absolute bottom-4 right-4 p-2 bg-zinc-700 rounded-md transition-all duration-300"
  >
    <IconsLoading class="text-white" v-if="isLoading" />
    <IconsSaved class="text-green-500" v-else />
  </div>
</template>

<script setup>
// Imports
import { useDebounceFn } from "@vueuse/core";
import { QuillEditor, Delta } from "@vueup/vue-quill";
import { onMounted, defineProps, ref } from "vue";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { useFileStore } from "@/store/fileStore";
// Register Component
const components = {
  QuillEditor,
};

// Define Props
const props = defineProps(["id"]);

// Initial Records
const dataField = ref(null);
const isLoading = ref(false);
const files = useFileStore();
// Setup On Mounted
onMounted(async () => {
  dataField.value = files.getFileDetails(props.id);
});

// Update Content & Save
const saveContent = () => {
  isLoading.value = true;
  updateConent();
};

const updateConent = useDebounceFn(async () => {
  // save Details
  const response = files.updateFile(props.id, dataField.value);
  isLoading.value = false;
}, 1500);
</script>

<style>
.ql-formats {
  @apply border p-0.5 border-zinc-400 rounded-md hover:border-zinc-900;
}
.ql-toolbar {
  @apply space-y-2 border rounded-md;
}
.ql-hidden {
  @apply hidden;
}
.ql-editor {
  @apply text-xl;
}
</style>
