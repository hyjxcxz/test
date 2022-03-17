import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import L from 'leaflet'
// import "leaflet/dist/leaflet.css"
// import LeafletDraw from 'leaflet-draw'
// import 'leaflet-draw/dist/leaflet.draw.css'
// require('../vendors/l.ellipse')

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.L=L

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
