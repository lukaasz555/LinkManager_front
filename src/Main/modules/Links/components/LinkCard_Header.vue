<template>
  <header class="d-flex align-center justify-space-between mb-0">
    <h3>{{ title }}</h3>
    <div>
      <v-icon
        v-if="isFavorite"
        size="small"
        color="error"
        @click="setAsFavorite"
        >mdi-heart</v-icon
      >
      <v-icon v-else size="small" @click="setAsFavorite"
        >mdi-heart-outline</v-icon
      >
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  linkId: {
    type: Number,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

function setAsFavorite(): void {
  console.log("toggle favorite - ", props.linkId);
}
</script>

<style scoped lang="scss">
@import "../../../../styles/variables.scss";
header {
  h3 {
    font-size: $font-size-title;
  }
}
</style>
