<script>
import Input from "./Input.vue";
import Output from "./Output.vue";

export default {
  name: "Container",
  components: {
    Input,
    Output
  }
};
</script>

<style lang="scss">
.container {
  animation: right-pull 0.75s ease forwards;
  background-color: #ffffff;
  border: none;
  border-radius: 4%;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
  min-height: 386px;
  height: 40vw;
  max-height: 933px;
  min-width: 290px;
  width: 30vw;
  max-width: 700px;
  opacity: 0;
  overflow: hidden;

  .containerTop,
  .containerBot {
    height: 39%;
    width: 89%;
    padding: 5.5%;

    h2 {
      display: inline;
      font-size: 3rem;
      font-weight: lighter;
      margin: 0;
      padding-left: 8px;
    }
  }

  @media (min-width: 1201px) {
    .containerTop h2,
    .containerBot h2 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 1400px) {
    .containerTop h2,
    .containerBot h2 {
      font-size: 4rem;
    }
  }

  @media (min-width: 1800px) {
    .containerTop h2,
    .containerBot h2 {
      font-size: 5rem;
    }
  }

  @media (min-width: 2200px) {
    .containerTop h2,
    .containerBot h2 {
      font-size: 5.75rem;
    }
  }

  @media (min-width: 2560px) {
    .containerTop h2,
    .containerBot h2 {
      font-size: 6.5rem;
    }
  }
}

@keyframes right-pull {
  0% {
    opacity: 0;
    margin-right: -3em;
  }
  100% {
    opacity: 1;
    margin-right: 0;
  }
}
</style>

<template>
  <div class="container">
    <Input />
    <Output />
  </div>
</template>
