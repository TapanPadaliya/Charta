<template>
  <div class="">
    <FileHeading :label="sectionLabel">
      <template #default>
        <div
          class="bg-zinc-700 rounded-md text-white flex items-center justify-center gap-2 text-sm"
        >
          <button
            v-for="(item, i) in options"
            class="transition-all duration-300 p-2"
            :class="
              choosenOption == item.id
                ? 'text-red-400 bg-zinc-600 rounded-md'
                : ''
            "
            :key="i"
            @click="choosenOption = item.id"
          >
            {{ item.label }}
          </button>
        </div>
      </template>
    </FileHeading>
    <div class="my-2">
      <FileView v-if="choosenOption == 1" :id="id" />
      <FileEdit v-if="choosenOption == 2" :id="id" />
    </div>
  </div>
</template>

<script setup>
import { useFileStore } from "@/store/fileStore";
import { ref } from "vue";

const options = [
  { id: 1, label: "View" },
  { id: 2, label: "Edit" },
];

const { $bus } = useNuxtApp();
const files = useFileStore();

const sectionLabel = ref(null); // Title For Section
const choosenOption = ref(1); // View & Edit Option

const id = ref(null); //

// Fetch On Emit
$bus.$on("see-details", (data) => {
  sectionLabel.value = null;
  choosenOption.value = 1;

  id.value = null;
  sectionLabel.value = data?.name;
  id.value = data?.id;
});

const changeOption = (id) => {
  choosenOption.value = id;
};
</script>
