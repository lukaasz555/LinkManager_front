<template>
  <div class="link__container mb-5">
    <LinkCardHeader
      :link-id="link.id"
      :title="link.title"
      :is-favorite="link.isFavorite"
    />

    <LinkCardMain :url="link.url" :categories-ids="link.categoriesIds" />

    <LinkCardFooter
      :are-details-visible="areDetailsVisible"
      :createdAt="link.createdAt"
      :notes="link.notes"
      @toggleVisibility="toggleDetailsVisibility"
    />
  </div>
</template>

<script setup lang="ts">
import { Link } from "@/Main/models/Link";
import { PropType, ref } from "vue";
import LinkCardHeader from "./LinkCard_Header.vue";
import LinkCardMain from "./LinkCard_Main.vue";
import LinkCardFooter from "./LinkCard_Footer.vue";

defineProps({
  link: {
    type: Object as PropType<Link>,
    required: true,
  },
});

const areDetailsVisible = ref(false);

function toggleDetailsVisibility(): void {
  areDetailsVisible.value = !areDetailsVisible.value;
}
</script>

<style scoped lang="scss">
@import "../../../../styles/variables.scss";
.link__container {
  border: 1px solid $col-navy-base;
  border-radius: $border-radius-outer;
  padding: 0.5em 1.25em 0.35em;
  transition: height 0.2s;
}
</style>
