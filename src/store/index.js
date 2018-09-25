import Vue from "vue";
import Vuex from "vuex";
import tree from "switch-tree";

import * as conversions from "./../lib/conversions";
import conversionOrder from "./../lib/conversionOrder";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: "",
    inputType: "",
    outputValue: conversions.account(),
    outputType: 0,
    outputTypes: conversionOrder
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
      const outputType = conversionOrder[parseInt(state.outputType, 10)];

      const execute = tree`
        lazy ${outputType}
          value ${"Reverse Hex"} ${conversions.reverseHex}
          value ${"Account"} ${conversions.account}
          value ${"Fixed8"} ${conversions.int2fixed8}
          value ${"Fixed8 -> Num"} ${conversions.fixed82int}
          value ${"String -> Hex"} ${conversions.s2h}
          value ${"Int -> Hex"} ${conversions.i2h}
      `;

      commit("setOutputValue", execute(state.inputValue));
    }
  }
});
