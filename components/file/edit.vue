<template>
  <div>
    <QuillEditor
      v-model:content="dataField"
      toolbar="full"
      contentType="html"
      class="border border-black"
      @update:content="updateConent"
    />
  </div>
</template>

<script setup>
// Imports
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

// Setup On Mounted
onMounted(async () => {
  dataField.value = props.details;
});

// Update Content & Save
const updateConent = async (data) => {
  console.log("Updating Content", data);
};
</script>
