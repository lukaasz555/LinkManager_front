<template>
  <v-app class="wrapper">
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import i18n from "./plugins/i18n";
import { LanguageEnum } from "./Global/enums/Language.enum";

onMounted(() => {
  const lang = localStorage.getItem("lang");
  if (lang) i18n.global.locale = lang as LanguageEnum;
  else i18n.global.locale = LanguageEnum.EN;
});
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
