<script>
import debounce from "debounce";

import { mapActions, mapGetters, mapMutations } from "vuex";

const getters = {
  ...mapGetters({
    value: "getInputValue"
  })
};

const mutations = {
  ...mapMutations({
    value: "setInputValue"
  })
};

const actions = {
  ...mapActions({
    convert: "convert",
    value: "setInputAndConvert"
  })
};

export default {
  computed: {
    value: {
      get: getters.value,
      set: mutations.value
    }
  },
  methods: {
    debounceConvert: debounce(actions.convert, 250)
  }
};
</script>

<style lang="scss">
.containerTop {
  background: linear-gradient(to bottom left, #8bc34a, #a9e168);

  h2 {
    color: #ffffff;
  }

  .type {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .content .input {
    color: #ffffff;
    background-color: transparent;
    font-size: inherit;

    box-sizing: border-box;
    padding-bottom: 8px;
    border: none;
    border-bottom: 0.2rem solid #ffffff;

    width: 100%;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #ffffff;
    }
  }
}
</style>


<template>
  <div class="containerTop">
    <h2>Input</h2>
    <div class="content">
      <input @input="debounceConvert" v-model="value" type="text" class="input" placeholder="Your input goes here" autofocus />
    </div>
  </div>
</template>
