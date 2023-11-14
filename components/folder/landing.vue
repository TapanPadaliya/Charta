<template>
  <div
    class="bg-zinc-600 w-full flex items-center justify-center py-2 rounded-md"
  >
    <span class="text-white"> Folder Details </span>
  </div>
  <div class="flex items-center justify-center my-10 flex-col space-y-8">
    <!-- Folder Id -->
    <div class="flex items-center justify-center flex-col">
      <span class="text-xs">Folder Id</span>
      <p class="text-xl">
        {{ detail?.folderId }}
      </p>
    </div>

    <!-- Folder Image -->
    <div class="flex items-center justify-center flex-col">
      <span class="text-xs">Folder Image</span>
      <img
        v-if="detail?.folderImageUrl"
        :src="detail?.folderImageUrl"
        class="max-w-xs max-h-xs rounded-lg border border-zinc-800"
      />
      <IconsFile class="h-32 w-32" v-else />
    </div>

    <!-- Folder Name -->
    <div class="flex items-center justify-center flex-col">
      <span class="text-xs">Folder Name</span>
      <p class="text-2xl">
        {{ detail?.folderName }}
      </p>
    </div>

    <!-- Folder Slug -->
    <div class="flex items-center justify-center flex-col">
      <NuxtLink :to="detail?.folderSlug">
        <p class="text-2xl">
          {{ detail?.folderSlug }}
        </p>
      </NuxtLink>
    </div>

    <!-- Folder Slug -->
    <div class="bg-zinc-600 p-2 rounded text-white hover:bg-zinc-700">
      <NuxtLink
        :to="`/settings/folder/edit/${detail?.folderSlug}`"
        class="flex items-center justify-center gap-3"
      >
        <IconsPen class="h-5 w-5" />
        <p class="text-xl">Edit Folder Details</p>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
defineProps(["detail"]);
</script>
