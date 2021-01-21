import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import BaseLayout from '@/components/BaseLayout.vue';

Vue.config.productionTip = false;

Vue.component('BaseLayout', BaseLayout);

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');
