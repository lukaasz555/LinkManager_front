<template>
  <v-text-field
    variant="outlined"
    :label="label"
    color="primary"
    :type="type"
    :rules="rules"
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
  rules: {
    type: Array as PropType<((v: string) => string | true)[]>,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
@import "../../styles/textfields.scss";
::v-deep.v-input {
  .v-field {
    border-radius: 8px;
  }
  .v-label {
    text-transform: capitalize;
  }
}
</style>
