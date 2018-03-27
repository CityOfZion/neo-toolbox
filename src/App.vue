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
  background-color: #f8f8f8;
  padding: 0;
  margin: 0;
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
