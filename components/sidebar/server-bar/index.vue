<template>
  <aside
    class="min-w-[64px] bg-zinc-800 text-white overflow-y-auto overflow-hidden"
  >
    <!-- Default Home Index -->
    <div class="flex flex-col space-y-2 my-2">
      <SidebarServerBarServer />
    </div>

    <div class="absolute w-16 bottom-0 z-50 bg-zinc-900 py-2">
      <SidebarServerBarSetting />
    </div>
  </aside>
</template>
