import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/assets/css/main.css'
import '@/assets/css/media-query.css'

// import VueClipboard from 'vue-clipboard2'

// Vue.use(VueClipboard)

// Vue.prototype.$axios = instance
// Vue.prototype.$toastify = toastify
    // Vue.use(http)

Vue.config.ignoredElements = [/^ion-/]

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')