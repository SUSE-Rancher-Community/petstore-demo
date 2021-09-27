import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PetList from "../components/Pet/PetList";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pets',
      name: 'Pets',
      component: PetList
    }
  ]
})
