<template>
  <div class="container">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/Global/components/Header.vue";
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";
.container {
  width: 90%;
  transition: all 0.15s;
  margin-top: 5em;
  main {
    padding: 2em 3em 0.5em;
    border-radius: $border-radius-outer;
    box-shadow: $box-shadow-card;
  }
}

@media (min-width: 576px) {
  .container {
    width: 360px;
  }
}
</style>
