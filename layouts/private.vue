<template>
  <div class="bg-zinc-950 private overflow-hidden">
    <div class="flex h-screen flex-row bg-zinc-200">
      <SidebarServerBar />
      <SidebarChannelBar />
      <div class="md:block hidden p-4">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.private {
  font-family: "inter";
}
</style>
