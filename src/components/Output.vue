<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

const getters = {
  ...mapGetters({
    selectedType: "getCurrentOutputType",
    types: "getOutputTypes",
    value: "getOutputValue"
  })
};

const mutations = {
  ...mapMutations({
    selectedType: "setCurrentOutputType"
  })
};

export default {
  computed: {
    selectedType: {
      get: getters.selectedType,
      set: mutations.selectedType
    },
    types: getters.types,
    value: getters.value
  },
  methods: {
    ...mapActions({
      onChangeSelect: "convert"
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

  .content {
    overflow-x: hidden;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;

    p {
      display: inline;

      &.tag {
        padding: 0 4px;
        background-color: rgba(139, 195, 74, 0.1);
        color: #8bc34a;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }

    p + p {
      margin-left: 4px;
    }
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
    <select @change="onChangeSelect" class="type" v-model="selectedType">
      <option v-for="(t, index) in types" v-bind:value="index" v-bind:key="t">{{ t }}</option>
    </select>
    <div class="content" v-html="value" />
  </div>
</template>
