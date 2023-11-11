<!-- YourComponent.vue -->
<template>
  <div>
    <!-- {{ servers.getAllServers }} -->
    <div
      v-for="(server, i) in servers.getAllServers"
      :key="i"
      class="flex gap-2"
    >
      <img
        v-if="server?.serverImageUrl"
        :src="server?.serverImageUrl"
        class="h-5 w-5 rounded-md"
      />
      <span>{{ server?.serverSlug }}</span>
      <button @click="removeServer(server.serverId)" class="text-red-400">
        Remove
      </button>
    </div>

    <form @submit.prevent="addServer">
      <label>
        Server Name:
        <input v-model="newServerName" required />
      </label>
      <label>
        Server Image Url:
        <input v-model="newServerImage" />
      </label>
      <button type="submit">Add Server</button>
    </form>
  </div>
</template>

<script setup>
import { useServerStore } from "@/store/serverStore";

definePageMeta({
  layout: "private",
});

const servers = useServerStore();
const newServerName = ref("");
const newServerImage = ref("");

const addServer = () => {
  servers.addServer(newServerName.value, newServerImage.value);
  // Clear the input fields after adding a server
  newServerName.value = "";
  newServerImage.value = "";
};

const removeServer = (serverId) => {
  servers.removeServer(serverId);
};
</script>
