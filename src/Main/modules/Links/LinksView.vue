<template>
  <div class="links__container">
    <LinkCard v-for="link in linkStore.links" :link="link" :key="link.id" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useLinkStore } from "./links.store";
import LinkCard from "./components/LinkCard.vue";

const linkStore = useLinkStore();

onMounted(() => {
  linkStore.loadLinks();
});
</script>

<style scoped lang="scss"></style>
