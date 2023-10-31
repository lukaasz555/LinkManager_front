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
  width: 90%;
  transition: all 0.15s;
  header {
    font-size: 38px;
    // font-family? font-weight?
    color: $col-navy-base;
    text-align: center;
    margin-bottom: 0.25em;
  }

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
