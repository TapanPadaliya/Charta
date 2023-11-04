<template>
  <div>
    <div class="flex justify-center">
      <h2>Login</h2>
    </div>
    <div class="p-4">
      <div class="border-3 border-gray-300 rounded-md">
        <label for="uname" class="mb-2 block">
          <b>Username</b>
        </label>
        <input
          type="text"
          class="w-full border-gray-200 rounded-md p-2 mt-2"
          v-model="user.username"
          placeholder="Enter Username"
          name="uname"
          required
        />
        <label for="psw" class="mb-2 block mt-4">
          <b>Password</b>
        </label>
        <input
          type="password"
          class="w-full border-gray-200 rounded-md p-2 mt-2"
          v-model="user.password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button
          @click.prevent="login"
          class="bg-green-500 text-white p-3 mt-4 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  username: "kminchelle",
  password: "0lelplR",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push("/");
  }
};
</script>
