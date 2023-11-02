<template>
  <v-btn
    flat
    :ripple="false"
    :disabled="isDisabled"
    :class="[buttonType, isDisabled ? ButtonType.Disabled : '', buttonClass]"
    @click="handleClick"
  >
    {{ buttonText }}
    <slot name="append"></slot>
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
  buttonClass: {
    type: String,
    default: undefined,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

function handleClick(): void {
  emit("click");
}
</script>
