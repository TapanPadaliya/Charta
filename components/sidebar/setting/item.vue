<template>
  <NuxtLink :to="to" active-class="active-file">
    <div
      class="w-full bg-zinc-800 hover:bg-zinc-900 rounded px-2 py-1 flex items-center gap-2 font-normal"
    >
      <IconsDot class="h-5 w-5" :class="`text-${colors[randomColor]}`" />
      <span>
        {{ name }}
      </span>
    </div>
  </NuxtLink>
</template>
<script setup>
defineProps({
  to: {
    type: String,
    default: "/",
  },
  name: {
    type: String,
    default: "Name",
  },
  icon: {
    type: String,
    default: "",
  },
});
const colors = [
  "pink-900",
  "slate-900",
  "yellow-800",
  "blue-400",
  "orange-800",
  "red-700",
  "zinc-900",
  "gray-900",
  "lime-900",
  "teal-950",
  "violet-900",
  "rose-900",
];

const randomColor = Math.floor(Math.random() * colors.length);
</script>
