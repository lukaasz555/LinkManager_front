<template>
  <div class="mt-5 addcategory__wrapper">
    <v-form id="categoryForm">
      <Input v-model="categoryData.name" :label="$t('Name')" class="mb-2" />
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
        <Button @click="saveForm" />
        <Button :button-text="$t('Cancel')" :button-type="ButtonType.Neutral" />
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import Input from "@/Global/components/Input.vue";
import Button from "@/Global/components/Button.vue";
import { ref } from "vue";
import { CategoryData } from "../vm/CategoryData";
import { ButtonType } from "@/Global/enums/ButtonType.enum";

const categoryData = ref(new CategoryData());
const isPickerVisible = ref(false);

function openColorPicker(): void {
  isPickerVisible.value = true;
}

function saveForm(): void {
  console.log(categoryData.value);
}
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
