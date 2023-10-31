<template>
  <div class="links__container">
    <LinkCard v-for="link in currentLinks" :link="link" :key="link.id" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useLinkStore } from "./links.store";
import { Link } from "@/Main/models/Link";
import LinkCard from "./components/LinkCard.vue";

const linkStore = useLinkStore();

const currentLinks = ref<Link[]>([]);

onMounted(() => {
  linkStore.loadLinks();
  currentLinks.value = linkStore.links.slice(0, 15);
});
</script>

<style scoped lang="scss"></style>
