<template>
  <aside>
    <NavItem v-for="item in MenuItems" :navItem="item" :key="item.routeName" />
    <v-btn @click="accountStore.logout"> Logout </v-btn>
    <LanguageChooser />
  </aside>
</template>

<script setup lang="ts">
import { MenuItems } from "../data/MenuItems";
import NavItem from "./NavItem.vue";
import LanguageChooser from "../components/LanguageChooser.vue";
import { useAccountStore } from "@/Account/account.store";

const accountStore = useAccountStore();
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";
aside {
  position: sticky;
  top: 20px;
  height: 300px;
  overflow-y: auto;
}
</style>
