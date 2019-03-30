import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import VueSuperagent from 'vue-superagent';

//import 'buefy/lib/buefy.css';

Vue.use(Buefy);
Vue.use(VueSuperagent, {
    baseUrl: 'https://jsonplaceholder.typicode.com'
});

new Vue({
  el: '#app',
  render: h => h(App)
});
