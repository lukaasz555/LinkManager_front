<template>
  <div class="d-flex flex-column align-start mt-5 ml-4">
    <p class="language-label">{{ $t("Language") }}</p>
    <v-btn-toggle
      v-model="selectedLanguage"
      mandatory
      selectedClass="selected"
      density="compact"
      @update:modelValue="setLanguage"
    >
      <v-btn
        :value="LanguageEnum.EN"
        class="language-button"
        variant="plain"
        :ripple="false"
        >EN</v-btn
      >
      <v-btn
        :value="LanguageEnum.PL"
        class="language-button"
        variant="plain"
        :ripple="false"
        >PL</v-btn
      >
    </v-btn-toggle>
  </div>
</template>

<script setup lang="ts">
import { LanguageEnum } from "@/Global/enums/Language.enum";
import i18n from "@/plugins/i18n";
import { onBeforeMount } from "vue";
import { ref } from "vue";

const selectedLanguage = ref();

function setLanguage(language: LanguageEnum): void {
  i18n.global.locale = language;
  localStorage.setItem("user-lang", language);
}

onBeforeMount(() => {
  const lang = localStorage.getItem("user-lang");
  if (lang) selectedLanguage.value = lang as LanguageEnum;
  else selectedLanguage.value = LanguageEnum.EN;
});
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";
.language-label {
  font-size: $font-size-helper;
  color: $col-text-gray;
}

.language-button {
  background: none;
  font-weight: 600 !important;
  justify-content: flex-start;
  color: $col-navy-base;
  padding: 0;
  width: 25px;
  min-width: 0;
  font-size: $font-size-helper !important;
  height: 20px !important;
  display: flex;
  &.selected {
    opacity: 1;
  }
}
</style>
