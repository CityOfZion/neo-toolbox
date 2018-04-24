import Vue from "vue";
import Vuex from "vuex";
import tree from "switch-tree";

import * as conversions from "./../lib/conversions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: "",
    inputType: "",
    outputValue: "",
    outputType: "0",
    outputTypes: [
      { text: "Reverse Hex", value: "0" },
      { text: "Account", value: "1" },
      { text: "Fixed8", value: "2" },
      { text: "Fixed8 > Num", value: "3" }
    ]
  },
  getters: {
    getInputValue(state) {
      return state.inputValue;
    },
    getCurrentInputType(state) {
      return state.inputType;
    },
    getCurrentOutputType(state) {
      return state.outputType;
    },
    getOutputTypes(state) {
      return state.outputTypes;
    },
    getOutputValue(state) {
      return state.outputValue;
    }
  },
  mutations: {
    setInputValue(state, input) {
      state.inputValue = input;
    },
    setCurrentOutputType(state, x) {
      state.outputType = x;
    },
    setOutputValue(state, x) {
      state.outputValue = x;
    }
  },
  actions: {
    convert({ commit, state }) {
      const outputType = parseInt(state.outputType, 10);

      const execute = tree`
        lazy ${outputType}
          value ${0} ${conversions.reverseHex}
          value ${1} ${conversions.account}
          value ${2} ${conversions.int2fixed8}
          value ${3} ${conversions.fixed82int}
      `;

      commit("setOutputValue", execute(state.inputValue));
    }
  }
});
