import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
<<<<<<< HEAD
import { faPhone, faBars, faCogs, faPowerOff } from '@fortawesome/free-solid-svg-icons';
=======
import {
  faPhone, faBars, faTrash, faCog, faHome, faBook,
} from '@fortawesome/free-solid-svg-icons';
>>>>>>> f4fc16a154f1828932f119e16ff06c2742c57b39
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

<<<<<<< HEAD
library.add(faPhone, faBars, faFacebookF, faTwitter, faInstagram, faCogs, faPowerOff);
=======
library.add(faPhone, faBars, faFacebookF, faTwitter,
  faInstagram, faTrash, faCog, faHome, faBook);
>>>>>>> f4fc16a154f1828932f119e16ff06c2742c57b39

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
