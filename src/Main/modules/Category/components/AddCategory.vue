<template>
  <div class="mt-5 addcategory__wrapper">
    <v-form id="categoryForm" ref="categoryForm">
      <Input
        v-model="categoryData.name"
        :label="$t('Name')"
        class="mb-2"
        :rules="[rules.required, rules.maxLengthCategoryName]"
      />
      <v-menu
        v-model="isPickerVisible"
        attach="categoryForm"
        :close-on-content-click="false"
        absolute
        offset-y
      >
        <template #activator>
          <Input
            v-model="categoryData.color"
            :label="$t('Color')"
            class="mb-2 color-picker"
            :rules="[rules.required, rules.lengthCategoryColor]"
            @focus="isPickerVisible = true"
          >
            <template #prepend-inner>
              <div
                class="color-preview"
                :style="{ background: `${categoryData.color}` }"
                @click="openColorPicker"
              ></div>
            </template>
          </Input>
        </template>
        <v-color-picker
          v-model="categoryData.color"
          dot-size="15"
          hide-inputs
          hide-mode-switch
          mode="hex"
          :width="320"
          :style="{ overflow: 'hidden' }"
        ></v-color-picker>
      </v-menu>
      <div class="d-flex buttons-container">
        <Button @click="onSaveClick" />
        <Button
          :button-text="$t('Cancel')"
          :button-type="ButtonType.Neutral"
          @click="onCancelClick"
        />
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Input from "@/Global/components/Input.vue";
import Button from "@/Global/components/Button.vue";
import { ButtonType } from "@/Global/enums/ButtonType.enum";
import { CategoryData } from "../vm/CategoryData";
import { addCategory } from "../categories.service";
import { i18n } from "@/plugins/i18n";
import { useAppStore } from "@/Global/store/app";

const categoryData = ref(new CategoryData());
const isPickerVisible = ref(false);
const categoryForm = ref<HTMLFormElement | null>(null);

function openColorPicker(): void {
  isPickerVisible.value = true;
}

async function onSaveClick(): Promise<void> {
  if (categoryForm.value) {
    const { valid } = await categoryForm.value.validate();
    if (valid) {
      await addCategory(categoryData.value)
        .then(() => {
          useAppStore().setSuccess(
            true,
            `${i18n.global.t("New category created")}`
          );
        })
        .catch(() => {
          useAppStore().setError(
            true,
            `${i18n.global.t("Something went wrong. Try again.")}`
          );
        });
    } else {
      useAppStore().setError(true, `${i18n.global.t("Fill the input fields")}`);
    }
  } else {
    useAppStore().setError(true, `${i18n.global.t("Fill the input fields")}`);
  }
}

function onCancelClick(): void {
  categoryForm.value?.reset();
  categoryData.value = new CategoryData();
}

const rules = {
  required: (val: string) => !!val || `${i18n.global.t("Required field")}`,
  maxLengthCategoryName: (val: string) =>
    val.length <= 20 || `${i18n.global.t("Max 20 characters")}`,
  lengthCategoryColor: (val: string) =>
    (val.length <= 7 && val.length >= 4) ||
    `${i18n.global.t("Allowed formats: #FFF, #FFFFFF")}`,
};
</script>

<style scoped lang="scss">
@import "../../../../styles/variables.scss";
.addcategory__wrapper {
  width: 100%;
}

@media (min-width: 576px) {
  .addcategory__wrapper {
    width: 500px;
  }
}

#categoryForm {
  position: relative;
  min-height: 600px;
}

.buttons-container {
  flex: 1 auto;
  column-gap: 25px;
  button {
    flex: 0 1 50%;
  }
}

.color-preview {
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;
}

.color-picker {
  border-radius: 12px;
}

.v-color-picker {
  border-radius: $border-radius-inner !important;
  box-shadow: none !important;
  border: 1px solid $col-gray-base;
}
</style>
