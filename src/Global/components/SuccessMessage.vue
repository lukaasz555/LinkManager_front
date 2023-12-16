<template>
  <v-snackbar v-model="appStore.isSuccess" class="success-snackbar">
    <div class="snackbar-container d-flex flex-column align-center">
      <div>
        {{ appStore.successMessage || $t("Success!") }}
      </div>
      <!-- <div class="d-flex justify-center">
        <v-btn
          variant="text"
          :ripple="false"
          class="snackbar-container--close-btn"
          @click="appStore.setSuccess(false)"
        >
          {{ $t("Close") }}
        </v-btn>
      </div> -->
    </div>
  </v-snackbar>
</template>

<script setup lang="ts">
import { useAppStore } from "../store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";

::v-deep.success-snackbar {
  .v-overlay__content {
    border-radius: 12px;
    box-shadow: none;
    overflow: hidden;
    .v-snackbar__content {
      background: $col-success-base;
      color: #fff;
      box-shadow: none;
    }
  }
}
</style>
