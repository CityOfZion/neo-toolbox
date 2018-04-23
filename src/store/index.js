import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    input: {
      namespaced: true,
      state: {
        value: "",
        type: ""
      }
    },
    output: {
      namespaced: true,
      state: {
        value: "",
        type: "0",
        types: [
          { text: "Reverse Hex", value: "0" },
          { text: "Account", value: "1" },
          { text: "Fixed8", value: "2" },
          { text: "Fixed8 > Num", value: "3" }
        ]
      },
      getters: {
        getCurrentType(state) {
          return state.type;
        },
        getTypes(state) {
          return state.types;
        }
      },
      mutations: {
        setCurrentType(state, x) {
          state.type = x;
        }
      }
    }
  }
});
