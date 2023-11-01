<template>
  <div class="link__container mb-5">
    <header class="d-flex align-center justify-space-between mb-0">
      <h3>{{ link.title }}</h3>
      <div>
        <v-icon
          v-if="link.isFavorite"
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

    <section>
      <a :href="link.url">{{ link.url }}</a>
      <div class="d-flex align-center justify-space-between mt-2">
        <div class="category-items__container">
          <CategoryItem
            v-for="cat in link.categoriesIds"
            :category-id="cat"
            :key="cat"
          />
        </div>
        <div class="action-buttons__container">
          <Button
            class="small"
            :button-type="ButtonType.Neutral"
            :button-text="$t('Edit')"
          />
          <Button
            class="small"
            :button-type="ButtonType.Remove"
            :button-text="$t('Remove')"
          />
        </div>
      </div>
    </section>

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
import Button from "@/Global/components/Button.vue";
import { ButtonType } from "@/Global/enums/ButtonType.enum";
import CategoryItem from "./CategoryItem.vue";
import LinkCardFooter from "./LinkCard_Footer.vue";

const props = defineProps({
  link: {
    type: Object as PropType<Link>,
    required: true,
  },
});

const areDetailsVisible = ref(false);

function setAsFavorite(): void {
  console.log(`set link with id ${props.link.id} as fav`);
}

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

  header {
    h3 {
      font-size: $font-size-title;
    }
  }

  section {
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
}
</style>
