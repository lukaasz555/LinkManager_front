<template>
  <v-btn
    flat
    :ripple="false"
    :disabled="isDisabled || appStore.isLoading"
    :class="[buttonType, isDisabled ? ButtonType.Disabled : '', buttonClass]"
    :loading="appStore.isLoading"
    @click="handleClick"
  >
    {{ buttonText }}
    <slot name="append"></slot>
  </v-btn>
  <!-- <div v-if="appStore.isError">
    <p class="error-message">{{ appStore.errorMessage }}</p>
  </div> -->
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ButtonType } from "../enums/ButtonType.enum";
import { useAppStore } from "../store/app";

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

const appStore = useAppStore();

function handleClick(): void {
  emit("click");
}
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";
.error-message {
  font-size: $font-size-helper;
  color: $col-error-base;
  text-align: center;
  margin-top: 0.25em;
}
</style>
