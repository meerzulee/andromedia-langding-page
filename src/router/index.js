import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RouterView from '../views/RouterView.vue'

import Projects from '../views/Projects.vue'
import Tijo from '../views/Projects/Tijo.vue'
import Raincatcher from '../views/Projects/Raincatcher.vue'
import Soros from '../views/Projects/Soros.vue'
import Dialecticon from '../views/Projects/Dialecticon.vue'
import Fanat from '../views/Projects/Fanat.vue'
import SMM from '../views/Projects/SMM.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import { i18n } from '../main.js';

Vue.use(VueRouter)

const routes = [
  {
    path: "/:lang/",
    component: RouterView,
    beforeEnter(to, from, next) {
      const lang = to.params.lang;
      if (!["en", "ru"].includes(lang)) return next("ru");
      if (i18n.locale !== lang) {
        i18n.locale = lang;
      } 
      return next();
    },
    children:[
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects,
      },{
        path: 'contact',
        name: 'contact',
        component: Contact
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },
       {
        path: 'tijo',
        name: 'tijo',
        component: Tijo
      }, {
        path: 'raincatcher',
        name: 'raincatcher',
        component: Raincatcher
      },
      {
        path: 'soros',
        name: 'soros',
        component: Soros
      },
      {
        path: 'dialecticon',
        name: 'dialecticon',
        component: Dialecticon
      }, {
        path: 'fanatkg',
        name: 'fanat',
        component: Fanat
      }, {
        path: 'smm',
        name: 'smm',
        component: SMM
      }
    ]
  },
  
  { path: "*", redirect: Home }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { x: 0, y: 0 }
  }
})
// eslint-disable-next-line no-unused-vars


export default router
