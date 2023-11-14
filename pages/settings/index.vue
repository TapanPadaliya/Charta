<!-- YourComponent.vue -->
<template>
  <div>
    <SettingHeading label="Settings" />
    <div class="flex items-center my-2">
      <div class="text-lg bg-zinc-400 w-full rounded-md p-2">
        <div class="flex items-center justify-center gap-3">
          <IconsCaution class="h-5 w-5 text-black" />
          <p class="underline">Read Before Enters In Settings</p>
        </div>

        <div class="font-medium my-8 mx-8 text-sm">
          <div v-for="(item, i) in cautions" :key="i">
            <li>{{ item.note }}</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "private",
});
const cautions = [
  { note: "First Rule : Modify at your own risk." },
  { note: "We use to store details in localstorage, so keep avoide touching localstorage" },
  {
    note: "it might break some functionality after modifying records or schema.",
  },
  { note: "Don't modify anything in localstorage." },
  { note: "make sure to report a bug if you found any." },
];
</script>
