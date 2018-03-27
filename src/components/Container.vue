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
.containerOut {
  height: 36vw;
  max-height: 933px;
  max-width: 700px;
  min-height: 386px;
  min-width: 290px;
  width: 27vw;

  .container {
    animation: right-pull 0.75s ease forwards;
    background-color: #ffffff;
    border: none;
    border-radius: 4%;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
    opacity: 0;
    overflow: hidden;

    .containerTop,
    .containerBot {
      height: 50%;
      padding: 5%;
      width: 100%;

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
}

@keyframes right-pull {
  0% {
    opacity: 0;
    transform: translateX(6em);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

<template>
  <div class="containerOut">
    <div class="container">
      <Input />
      <Output />
    </div>
  </div>
</template>
