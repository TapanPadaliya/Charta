<template>
  <div
    class="bg-zinc-700 rounded-md text-white flex items-center justify-center gap-4 text-sm"
  >
    <button
      v-for="(item, i) in options"
      class="transition-all duration-300 p-2"
      :class="
        selectedValue == item.id ? 'text-red-400 bg-zinc-600 rounded-md' : ''
      "
      :key="i"
      @click="changeOption(item.id)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

defineProps({
  options: {
    type: Array,
    default: "Name",
  },
});

const selectedValue = ref(1);
const emit = defineEmits(["change-option"]);

const changeOption = (id) => {
  selectedValue.value = id;
  emit("change-option", id);
};
</script>
