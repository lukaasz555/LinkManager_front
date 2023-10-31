<template>
  <section>
    <header>{{ i18n.global.t("Categories") }}</header>
    <CategoriesTable />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCategoriesStore } from "./categories.store";
import CategoriesTable from "./components/CategoriesTable.vue";
import i18n from "@/plugins/i18n";

const categoriesStore = useCategoriesStore();

onMounted(() => {
  if (!categoriesStore.categories.length) categoriesStore.loadCategories();
});
</script>

<style scoped lang="scss">
@import "../../../styles/variables.scss";

section {
  margin-bottom: 2em;
  header {
    font-size: 24px;
    font-weight: 400;
    color: $col-navy-base;
    margin-bottom: 0.5em;
  }
}
</style>
