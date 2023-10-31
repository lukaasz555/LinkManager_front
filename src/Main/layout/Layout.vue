<template>
  <div class="container">
    <Header />
    <main>
      <Nav />
      <div class="content__container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/Global/components/Header.vue";
import Nav from "../components/Nav.vue";
import { onMounted } from "vue";
import { useCategoriesStore } from "../modules/Category/categories.store";

onMounted(() => {
  useCategoriesStore().loadCategories();
});
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";
.container {
  width: 95%;
  transition: all 0.15s;
  margin-top: 2.5em;
  align-self: center;
  main {
    padding: 2em 1em 0.5em;
    border-radius: $border-radius-outer;
    box-shadow: $box-shadow-card;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr;
    min-height: 80%; // temp

    aside {
      border-right: 1px solid #27272710; // remove it later
      height: 100%;
    }

    .content__container {
      margin: 0 2em 0 3em;
    }
  }
}

@media (min-width: 1264px) {
  .container {
    width: 1200px;
  }
}
</style>
