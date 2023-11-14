<template>
  <div class="">
    <QuillEditor
      v-model:content="dataField"
      toolbar="full"
      contentType="html"
      class="border border-black"
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
import { useFileStore } from "@/store/fileStore";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// Register Component
const components = {
  QuillEditor,
};

// Define Props
const props = defineProps(["details"]);

// Initial Records
const { $bus } = useNuxtApp();
const files = useFileStore();
const watchedId = ref(null);
const dataField = ref(null);
const isLoading = ref(false);

// Setup On Mounted
onMounted(async () => {
  dataField.value = props.details;
});

// Update Content & Save
const saveContent = () => {
  isLoading.value = true;
  updateConent();
};

const updateConent = useDebounceFn(async () => {
  console.log("Updating Contnet :", dataField.value);
  isLoading.value = false;
}, 4000);
</script>
