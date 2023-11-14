<template>
  <div>
    <div class="flex justify-center items-center gap-2 text-white">
      <IconsLogin class="h-6 w-6" />
      <h2 class="text-xl md:text-2xl">Login</h2>
    </div>
    <div class="p-4 text-white">
      <div class="border-3 border-gray-300 rounded-md">
        <label for="uname" class="mb-2 block"> Username </label>
        <input
          type="text"
          class="w-full border-gray-200 rounded-md p-2 text-black"
          v-model="user.username"
          placeholder="Enter Username"
          name="uname"
          required
        />
        <label for="psw" class="mb-2 block mt-4"> Password </label>
        <input
          type="password"
          class="w-full border-gray-200 rounded-md p-2 text-black mb-5"
          v-model="user.password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <div class="w-full flex items-center justify-center">
          <button
            @click.prevent="login"
            class="bg-red-300 text-white px-3 py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth.js";

const { authenticateUser } = useAuthStore();

const { authenticated } = storeToRefs(useAuthStore());

const user = ref({
  username: "kminchelle",
  password: "0lelplR",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  if (authenticated) {
    router.push("/");
  }
};
</script>
