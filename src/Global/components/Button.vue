<template>
  <v-btn @click="handleClick">
    {{ buttonText }}
  </v-btn>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "click"): void;
}>();

const props = defineProps({
  buttonText: {
    type: String,
    default: "Save",
  },
});

function handleClick(): void {
  emit("click");
}
</script>
