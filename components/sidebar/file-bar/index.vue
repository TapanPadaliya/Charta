<template>
  <aside class="min-w-[200px] w-[200px] bg-zinc-700 text-white">
    <!-- File Name -->
    <NuxtLink :to="folderDetail?.folderSlug" @click="seeFolderDetails()">
      <div class="bg-zinc-800 py-3 px-4 truncate m-2 rounded-md font-semibold">
        {{ folderDetail?.folderName }}
      </div></NuxtLink
    >
    <!-- Files Bar -->
    <div class="p-2 space-y-2">
      <div v-for="(item, i) in folderDetail?.files" :key="i">
        <SidebarFileBarItem
          :name="item?.fileName"
          @click="seeDetails(item?.fileId, item?.fileName)"
        />
      </div>
    </div>
    <SidebarFileBarNew
      :folder-id="folderDetail?.folderId"
      class="absolute bottom-0 w-[184px] my-2"
    />
  </aside>
  <div class="p-2 w-full overflow-y-auto">
    <NuxtPage />
  </div>
</template>
<script setup>
import { useFolderStore } from "@/store/folderStore";
import { ref, nextTick } from "vue";
import { useRoute } from "vue-router";
const { $bus } = useNuxtApp();
const folders = useFolderStore();
const route = useRoute();
let folderDetail = ref(null);

onMounted(() => {
  folderDetail.value = folders.getFolderDetails(route?.fullPath.slice(1));
});

const getFolderDetail = (slug) => {
  folderDetail.value = folders.getFolderDetails(slug);
};

const seeFolderDetails = () => {
  $bus.$emit("show-details");
};

const seeDetails = async (id, name) => {
  $bus.$emit("show-details", { id: id, name: name });
  await nextTick();
  $bus.$emit("see-details", { id: id, name: name });
};

$bus.$on("update-sidebar", (slug) => {
  if (slug) {
    getFolderDetail(slug);
  } else {
    getFolderDetail(route?.fullPath.slice(1));
  }
});
</script>
<style lang=""></style>
