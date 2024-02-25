<template>
  <v-app class="wrapper">
    <router-view />
    <ErrorMessage />
    <SuccessMessage />
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import i18n from "./plugins/i18n";
import { LanguageEnum } from "./Global/enums/Language.enum";
import ErrorMessage from "./Global/components/ErrorMessage.vue";
import SuccessMessage from "./Global/components/SuccessMessage.vue";

onMounted(() => {
  const lang = localStorage.getItem("user-lang");
  if (lang) i18n.global.locale = lang as LanguageEnum;
  else i18n.global.locale = LanguageEnum.EN;
});

function doNothing() {
  // deploy
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(234, 224, 255, 1) 60%,
    rgba(234, 224, 255, 0.25) 100%
  );
}
</style>
