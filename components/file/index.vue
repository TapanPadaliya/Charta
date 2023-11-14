<template>
  <div class="">
    <FileHeading :label="sectionLabel">
      <template #default>
        <SettingChooseOptions
          :options="options"
          @change-option="changeOption"
        />
      </template>
    </FileHeading>
    <div class="my-2">
      <FileView v-if="choosenOption == 1" :details="details" />
      <FileEdit v-if="choosenOption == 2" :details="details" />
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
const watchedId = ref(null);
const details = ref(null);
const sectionLabel = ref(null);
const choosenOption = ref(1);
$bus.$on("see-details", (data) => {
  sectionLabel.value = data?.name;
  watchedId.value = data?.id;
  details.value = files.getFileDetails(data?.id);
});

const changeOption = (id) => {
  choosenOption.value = id;
};
</script>
