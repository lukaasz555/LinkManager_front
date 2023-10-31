<template>
  <section>
    <v-tabs v-model="tab">
      <v-tab value="0" :ripple="false">
        {{ i18n.global.t("Categories") }}
      </v-tab>
      <v-tab value="1" :ripple="false">
        {{ i18n.global.t("Add new") }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="0">
        <CategoriesTable />
      </v-window-item>
      <v-window-item value="1">
        <AddCategory />
      </v-window-item>
    </v-window>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCategoriesStore } from "./categories.store";
import CategoriesTable from "./components/CategoriesTable.vue";
import AddCategory from "./components/AddCategory.vue";
import i18n from "@/plugins/i18n";

const categoriesStore = useCategoriesStore();
const tab = ref("0");

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

.v-slide-group__content {
  button {
    flex: 0 1 50%;
    min-width: 150px;
    max-width: 300px;
  }
}
</style>
