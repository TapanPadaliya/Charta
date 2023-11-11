<template>
  <div>
    <SettingHeading label="System Settings" />
    <div class="my-4 bg-zinc-400 rounded-md p-3 space-y-2 mx-10">
      <!-- Clear LocalStorage -->
      <button
        class="hover:bg-zinc-500 rounded-md p-1 flex items-center justify-between w-full"
        @click="clearLocalStore()"
      >
        <IconsFile class="h-6 w-6" />
        <span>Clear LocalStorage</span>
        <IconsBin class="h-6 w-6" />
      </button>
    </div>

    <!-- Upcoming -->
    <p class="text-center">Other Features Upcoming</p>
  </div>
</template>
<script setup>
const { $bus } = useNuxtApp();
definePageMeta({
  layout: "private",
});

// Clear LocalStore
const clearLocalStore = () => {
  let person = prompt(
    "Are you sure want to clear LocalStorage ? Write 'yes' to confirm"
  );
  if (person == "yes") {
    localStorage.clear();
    $bus.$emit("update-sidebar");
    setTimeout(() => {
      alert("LocalStorage Cleared");
    }, 500);
  }
};
</script>
