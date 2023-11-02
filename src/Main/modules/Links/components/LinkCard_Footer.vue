<template>
  <footer class="d-flex flex-column align-center">
    <div
      class="details__container mt-3"
      :class="{ isActive: props.areDetailsVisible }"
      ref="detailsContainer"
    >
      <div class="details__container--row">
        <p>{{ $t("Created") }}:</p>
        <p>{{ createdAt.substring(0, 10) }}</p>
      </div>
      <div v-if="notes" class="details__container--row">
        <p>{{ $t("Notes") }}:</p>
        <p>{{ notes }}</p>
      </div>
    </div>

    <div class="d-flex justify-center mt-2" style="max-width: 100px">
      <Button
        :button-text="$t('Details')"
        class="small no-border"
        :button-type="ButtonType.Neutral"
        @click="toggleDetailsVisibility"
      >
        <template #append>
          <v-icon
            size="medium"
            :style="{
              transform: areDetailsVisible ? 'rotate(180deg)' : '',
              transition: 'transform 0.15s',
            }"
            >mdi-arrow-down-thin</v-icon
          >
        </template>
      </Button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Button from "@/Global/components/Button.vue";
import { ButtonType } from "@/Global/enums/ButtonType.enum";
import { PropType } from "vue";
import { ref, watch } from "vue";

const emit = defineEmits<{
  (e: "toggleVisibility"): void;
}>();

const props = defineProps({
  areDetailsVisible: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: String,
    required: true,
  },
  notes: {
    type: String as PropType<String | null>,
    default: null,
  },
});

const detailsContainer = ref<HTMLDivElement | null>(null);

function toggleDetailsVisibility(): void {
  emit("toggleVisibility");
}

watch(
  () => props.areDetailsVisible,
  () => {
    if (detailsContainer.value) {
      detailsContainer.value.style.maxHeight = props.areDetailsVisible
        ? `${detailsContainer.value.scrollHeight}px`
        : "0";
    }
  }
);
</script>

<style scoped lang="scss">
@import "../../../../styles/variables.scss";
footer {
  .details__container {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.15s;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    &.isActive {
      max-height: auto; /* Adjust this value as needed */
      opacity: 1;
      visibility: visible;
      transition: max-height 0.15s, opacity 0.15s;
    }

    .details__container--row {
      font-size: $font-size-button;
      display: flex;
      font-weight: 400;
      & > p:first-child {
        color: $col-text-base;
        margin-right: 5px;
      }
      & > p:last-child {
        color: $col-text-gray;
      }
    }
  }
}
</style>
