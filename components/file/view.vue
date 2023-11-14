<template>
  <div class="h-full">
    <div
      class="border-2 rounded-md border-zinc-700 p-2 max-h-[calc(100vh-85px)] overflow-y-scroll overflow-hidden prose lg:prose-xl"
    >
      <div v-html="content" class="prose lg:prose-xl" />
    </div>
  </div>
</template>

<script setup>
import { useFileStore } from "@/store/fileStore";
import { defineProps, onMounted, ref, watch } from "vue";

const files = useFileStore();
const content = ref(null);

// Define Props
const props = defineProps({
  id: String, // Define the type of the prop
});

watch(
  () => props.id, // Watching the reactive value of props.id
  async (newId, oldId) => {
    // Update content when props.id changes
    content.value = await files.getFileDetails(newId);
  }
);

onMounted(async () => {
  content.value = await files.getFileDetails(props.id);
});
</script>
