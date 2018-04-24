<script>
import Container from "./components/Container.vue";

export default {
  name: "neo-toolbox",
  components: {
    Container
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
html,
body {
  font-size: 62.5%;
  padding: 0;
  margin: 0;
  background: linear-gradient(
    to bottom right,
    transparent,
    rgba(190, 190, 190, 0.05)
  );
}

div {
  box-sizing: border-box;
}

#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div id="app">
    <Container />
  </div>
</template>
