<template>
  <div>Watching Data of : {{ watchedId }}</div>
  <div>Details Are : {{ details }}</div>
</template>

<script setup>
import { useFileStore } from "@/store/fileStore";
import { ref } from "vue";
const { $bus } = useNuxtApp();
const files = useFileStore();
const watchedId = ref(null);
const details = ref(null);

$bus.$on("see-details", (id) => {
  watchedId.value = id;
  details.value = files.getFileDetails(id);
});
</script>
