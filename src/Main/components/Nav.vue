<template>
  <aside>
    <NavItem v-for="item in MenuItems" :navItem="item" :key="item.routeName" />
    <Button
      :buttonType="ButtonType.Neutral"
      :buttonText="i18n.global.t('Logout')"
      @click="accountStore.logout"
    />
    <LanguageChooser />
  </aside>
</template>

<script setup lang="ts">
import { MenuItems } from "../data/MenuItems";
import NavItem from "./NavItem.vue";
import LanguageChooser from "../components/LanguageChooser.vue";
import { useAccountStore } from "@/Account/account.store";
import Button from "@/Global/components/Button.vue";
import { ButtonType } from "@/Global/enums/ButtonType.enum";
import i18n from "@/plugins/i18n";

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
