<template>
  <v-btn class="nav-item-button" flat :ripple="false" @click="pushToRoute">
    {{ navItem.text }}
  </v-btn>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { MenuItem } from "../data/MenuItem";
import router from "@/Global/router";

const props = defineProps({
  navItem: {
    type: Object as PropType<MenuItem>,
    required: true,
  },
});

function pushToRoute(): void {
  router.push({ name: props.navItem.routeName });
}
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";
.nav-item-button {
  background: none;
  font-weight: 600 !important;
  justify-content: flex-start;
  color: $col-navy-base;
  &::after {
    display: none;
  }
}
</style>
