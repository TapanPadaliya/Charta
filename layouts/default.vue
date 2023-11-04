<template>
  <div class="bg-blue-300">
    <header>
      <ul class="flex justify-between items-center bg-gray-800">
        <li>
          <nuxt-link to="/" class="text-white hover:bg-gray-700 px-3 py-2"
            >Home</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/about" class="text-white hover:bg-gray-700 px-3 py-2"
            >About</nuxt-link
          >
        </li>
        <li v-if="!authenticated">
          <nuxt-link
            to="/login"
            class="bg-green-500 text-white hover:bg-green-600 px-3 py-2 rounded"
            >Login</nuxt-link
          >
        </li>
        <li v-if="authenticated">
          <nuxt-link
            @click="logout"
            class="bg-red-500 text-white hover:bg-red-600 px-3 py-2 rounded"
            >Logout</nuxt-link
          >
        </li>
      </ul>
    </header>
    <div class="mainContent mt-16">
      <NuxtPage />
    </div>
    <footer v-if="authenticated">
      <h1>Footer</h1>
    </footer>
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
