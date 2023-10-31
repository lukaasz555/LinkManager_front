<template>
  <v-app class="wrapper">
    <router-view />
  </v-app>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(234, 224, 255, 1) 60%,
    rgba(234, 224, 255, 0.25) 100%
  );
}
</style>
