import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import ElementUI from 'element-ui';
import VueCompositionApi from '@vue/composition-api';
import 'element-ui/lib/theme-chalk/index.css';
//自定义全局组件
Vue.components('svg-cicon',{
  template: "<div>asdfasfa</div>"
})

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
