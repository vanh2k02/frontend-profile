import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './routes'

import "@frontend/css/style.css"

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: routers,
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
