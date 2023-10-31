<template>
  <v-data-table
    :items="categoriesStore.categories"
    :headers="categoriesHeaders"
    density="comfortable"
    fixed-header
    class="custom-table"
    :items-per-page="-1"
    :hide-default-footer="true"
  >
    <template #item.color="{ item: { color } }">
      <div class="color-preview" :style="`background: ${color}`"></div>
    </template>

    <template #item.action="{ item: { id } }">
      <v-icon
        size="small"
        :color="'primary'"
        class="mr-1"
        @click="editItem(id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon size="small" :color="'primary'" @click="deleteItem(id)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { categoriesHeaders } from "../data/categories.headers";
import { VDataTable } from "vuetify/lib/labs/components.mjs";
import { useCategoriesStore } from "../categories.store";

const categoriesStore = useCategoriesStore();

function deleteItem(itemId: number): void {
  console.log("delete id:", itemId);
}

function editItem(itemId: number): void {
  console.log("edit id: ", itemId);
}
</script>

<style scoped lang="scss">
::v-deep.v-table.v-table--fixed-header.custom-table {
  background: none;
  th.v-data-table__td {
    background: none;
  }
  td.v-data-table__td {
    border-bottom: none !important;
  }
  .v-data-table-footer {
    display: none;
  }
}

.color-preview {
  height: 25px;
  width: 60px;
  border-radius: 50px;
}
</style>
