import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueApexCharts);
Vue.component("ApexChart", VueApexCharts);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
