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
