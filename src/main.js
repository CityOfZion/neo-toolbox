import Vue from "vue";

import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import "./store";

new Vue({
  render: h => h(App)
}).$mount("#app");
