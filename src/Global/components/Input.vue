<template>
  <v-text-field
    variant="outlined"
    :label="label"
    color="primary"
    :type="type"
    density="compact"
  ></v-text-field>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  label: {
    type: String,
    default: undefined,
  },
  type: {
    type: String as PropType<"string" | "password">,
    default: "string",
  },
});
</script>

<style scoped lang="scss">
::v-deep.v-input {
  .v-field {
    border-radius: 8px;
  }
  .v-label {
    text-transform: capitalize;
  }
}
</style>
