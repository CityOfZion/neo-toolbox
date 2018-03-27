<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "neo-toolbox",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
body {
  padding: 0;
  margin: 0;
  background-color: #f8f8f8;
}

#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
