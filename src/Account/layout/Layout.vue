<template>
  <div class="container">
    <header>LinkManager</header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/variables.scss";
.container {
  header {
    font-size: 38px;
    // font-family? font-weight?
    color: $col-navy-base;
    text-align: center;
    margin-bottom: 0.25em;
  }

  main {
    padding: 2em 3em 0.5em;
    background: rgba(251, 251, 251, 0.2);
    border-radius: 12px; // variable?
    min-width: 320px;
    box-shadow: 4px 8px 40px rgba(0, 0, 0, 0.25);
  }
}
</style>
