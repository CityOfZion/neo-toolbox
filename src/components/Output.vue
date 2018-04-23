<script>
import { mapGetters, mapMutations } from "vuex";

const getters = {
  ...mapGetters("output", {
    types: "getTypes",
    selectedType: "getCurrentType"
  })
};

const mutations = {
  ...mapMutations("output", {
    selectedType: "setCurrentType"
  })
};

export default {
  computed: {
    types: getters.types,
    selectedType: {
      get: getters.selectedType,
      set: mutations.selectedType
    }
  },
  actions: {
    ...mapMutations("output", {
      setCurrentType: "setCurrentType"
    })
  }
};
</script>

<style lang="scss">
.containerBot {
  h2 {
    color: #8bc34a;
  }

  .type {
    background-color: rgba(139, 195, 74, 0.1);
    color: #8bc34a;
  }

  .content::selection {
    color: #ffffff;
    background: rgba(139, 195, 74, 1);
  }
}
</style>


<template>
  <div class="containerBot">
    <h2>Output</h2>
    <select class="type" v-model="selectedType">
      <option v-for="t in types" v-bind:value="t.value" v-bind:key="t.text">{{ t.text }}</option>
    </select>
    <div class="content">
      Output?
    </div>
  </div>
</template>
