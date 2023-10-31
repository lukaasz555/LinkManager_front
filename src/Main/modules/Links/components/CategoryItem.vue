<template>
  <div
    class="category-item__wrapper"
    :style="{ background: `${category.color}` }"
  >
    <p :style="{ color: `${getContrastColor(category.color)}` }">
      {{ category.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Category } from "@/Main/models/Category";
import { ref } from "vue";
import { useCategoriesStore } from "../../Category/categories.store";
import { onBeforeMount } from "vue";
import { getContrastColor } from "@/Global/helpers/getContrastColor";

const props = defineProps({
  categoryId: {
    type: Number,
    required: true,
  },
});

const categoriesStore = useCategoriesStore();
const category = ref(new Category());

onBeforeMount(() => {
  category.value = categoriesStore.getCategoryById(props.categoryId);
});
</script>

<style scoped lang="scss">
.category-item__wrapper {
  border-radius: 8px;
  padding: 0.35em 0.75em;
  font-size: 14px;
}
</style>
