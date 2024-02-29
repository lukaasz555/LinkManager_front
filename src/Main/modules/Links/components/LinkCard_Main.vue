<template>
  <main>
    <a :href="url">{{ url }}</a>
    <div class="d-flex align-center justify-space-between mt-2">
      <div class="category-items__container">
        <CategoryItem
          v-for="cat in categoriesIds"
          :category-id="cat"
          :key="cat"
        />
      </div>
      <div class="action-buttons__container">
        <Button
          class="small"
          :button-type="ButtonType.Neutral"
          :button-text="i18n.global.t('Edit')"
        />
        <Button
          class="small"
          :button-type="ButtonType.Remove"
          :button-text="$t('Remove')"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { ButtonType } from "@/Global/enums/ButtonType.enum";
import CategoryItem from "./CategoryItem.vue";
import Button from "@/Global/components/Button.vue";
import { i18n } from "@/plugins/i18n";

defineProps({
  url: {
    type: String,
    required: true,
  },
  categoriesIds: {
    type: Array as PropType<number[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@import "../../../../styles/variables.scss";
main {
  a {
    color: $col-text-base;
    opacity: 0.6;
    text-decoration: none;
    transition: opacity 0.15s;
    &:hover {
      opacity: 1;
    }
  }
  .category-items__container {
    display: flex;
    gap: 15px;
  }
  .action-buttons__container {
    display: flex;
    column-gap: 15px;
    .v-btn {
      max-width: 70px;
    }
  }
}
</style>
