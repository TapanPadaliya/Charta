<template>
  <div>
    <SettingHeading label="Edit" />

    <!-- <div>Watching Data of : {{ watchedId }}</div>
    <div>Details Are : {{ details }}</div>

    <div v-html="details" class="border-black border-2"></div>
    <QuillEditor
      v-model:content="details"
      :toolbar="['bold', 'italic', 'underline']"
      contentType="html"
    /> -->
  </div>
</template>

<script setup>
// import { QuillEditor } from "@vueup/vue-quill";

// import { useFileStore } from "@/store/fileStore";
// import { ref } from "vue";

// const components = {
//   QuillEditor,
// };
// const { $bus } = useNuxtApp();
// const files = useFileStore();
// const watchedId = ref(null);
// const details = ref(null);

// $bus.$on("ff-details", (id) => {
//   watchedId.value = id;
//   details.value = files.getFileDetails(id);
// });
</script>
