<template>
  <v-btn flat :class="buttonType" :ripple="false" @click="handleClick">
    {{ buttonText }}
  </v-btn>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ButtonType } from "../enums/ButtonType.enum";

const emit = defineEmits<{
  (e: "click"): void;
}>();

defineProps({
  buttonText: {
    type: String,
    default: "Save",
  },
  buttonType: {
    type: String as PropType<ButtonType>,
    default: "default-button",
  },
});

function handleClick(): void {
  emit("click");
}
</script>
