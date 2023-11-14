<template>
  <div
    class="default bg-zinc-800 h-screen flex items-center justify-center flex-col overflow-y-scroll space-y-10"
  >
    <div class="flex items-center justify-center text-white gap-2">
      <img
        src="/images/Charta.png"
        alt="Charta Logo"
        class="aspect-square h-6"
      />
      <span class="text-xl md:text-2xl">Charta</span>
    </div>
    <div class="bg-zinc-700 rounded-lg border border-zinc-600 p-4 overflow-y-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth.js";

const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>
<style>
.default {
  font-family: "inter";
}
</style>
