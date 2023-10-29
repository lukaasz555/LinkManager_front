<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  padding-top: 5em;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(234, 224, 255, 1) 60%,
    rgba(234, 224, 255, 0.25) 100%
  );
}
</style>
