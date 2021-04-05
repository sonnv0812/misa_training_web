import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CustomerList from './components/views/customer/CustomerList.vue'
import EmployeeList from './components/views/employee/EmployeeList.vue'
Vue.config.productionTip = false

const routes = [
  { path: '/customer', component: CustomerList },
  { path: '/employee', component: EmployeeList }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
