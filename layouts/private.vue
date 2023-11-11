<template>
  <div class="bg-zinc-950 private overflow-hidden">
    <div class="flex h-screen flex-row bg-zinc-300 transition-all duration-300">
      <SidebarFolderBar />
      <SidebarSetting v-if="isShowSettingbar" />
      <SidebarFileBar v-else-if="isShowFilebar" />
      <Welcome v-else class="w-full" />
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
const isShowFilebar = computed(() => {
  if (router.fullPath !== "/") {
    if (router.fullPath !== "/settings") {
      return true;
    }
  } else {
    return false;
  }
});

const isShowSettingbar = computed(() => {
  if (router.fullPath.slice(0, 9) == "/settings") {
    return true;
  } else {
    return false;
  }
});
</script>

<style>
.private {
  font-family: "inter";
}
</style>
