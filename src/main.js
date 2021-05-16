import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faBars, faCogs, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faPhone, faBars, faFacebookF, faTwitter, faInstagram, faCogs, faPowerOff);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
