<template>
  <div class="mt-5 addcategory__wrapper">
    <v-form>
      <Input v-model="categoryData.name" :label="$t('Name')" class="mb-2" />
      <Input
        v-model="categoryData.color"
        :label="$t('Color')"
        class="mb-2"
        @focus="testFc"
      >
        <template #prepend-inner>
          <div
            class="color-preview"
            :style="{ background: `${categoryData.color}` }"
            @click="testFc"
          ></div>
        </template>
      </Input>
      <div class="d-flex buttons-container">
        <Button />
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

const testFc = () => console.log("test fc");
const categoryData = ref(new CategoryData());
</script>

<style scoped lang="scss">
.addcategory__wrapper {
  width: 100%;
}

@media (min-width: 576px) {
  .addcategory__wrapper {
    width: 500px;
  }
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
</style>
