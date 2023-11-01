<template>
  <aside>
    <NavItem v-for="item in MenuItems" :navItem="item" :key="item.routeName" />
  </aside>
</template>

<script setup lang="ts">
import NavItem from "./NavItem.vue";
import i18n from "@/plugins/i18n";
import { MainRoutesNames } from "../enums/MainRoutesNames.enum";
import { MenuItem } from "../data/MenuItem";

const MenuItems: MenuItem[] = [
  {
    text: i18n.global.t("Links"),
    routeName: MainRoutesNames.Links,
  },
  {
    text: i18n.global.t("Categories"),
    routeName: MainRoutesNames.Categories,
  },
  {
    text: i18n.global.t("Favorites"),
    routeName: MainRoutesNames.Favorites,
  },
  {
    text: i18n.global.t("Settings"),
    routeName: MainRoutesNames.Settings,
  },
];
</script>

<style scoped lang="scss">
aside {
  position: sticky;
  top: 20px;
  height: 200px;
  overflow-y: auto;
}
</style>
