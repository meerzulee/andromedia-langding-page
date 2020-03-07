import Vue from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router';

import VuePageTransition from 'vue-page-transition';
import VueI18n from 'vue-i18n';
import messages from './lang';

const VueScrollTo = require('vue-scrollto')


Vue.use(VueScrollTo)
Vue.use(VuePageTransition)

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages
});

Vue.config.productionTip = true

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')