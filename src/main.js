import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone, faEye, faBars, faTrash, faCog, faHome, faBook, faUserCog,
  faTrashAlt, faStar, faSignOutAlt, faRunning, faComments,
  faHouseUser, faUserFriends, faBell, faUser, faArrowRight,
  faPlus, faEdit, faAngleLeft, faCogs, faAngleDown,
  faStarAndCrescent, faAngleRight, faHamburger, faGraduationCap, faCampground,
  faStarHalfAlt, faCheckCircle, faShoppingBag, faTruck, faBoxOpen, faBalanceScale,
  faMinusCircle, faBullseye, faSmile, faHeart, faThumbsUp, faHandshake, faMugHot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Toaster from '@meforma/vue-toaster';
// import VeeValidate from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(faPhone, faBars, faEye, faFacebookF, faTwitter, faCogs, faTrashAlt, faCampground,
  faGraduationCap, faHouseUser, faUserFriends,
  faUserCog, faStarAndCrescent, faHome, faAngleDown, faArrowRight,
  faInstagram, faTrash, faCog, faHome, faBook, faStar, faSignOutAlt,
  faComments, faBell, faUser, faPlus, faEdit, faAngleLeft, faAngleRight, faRunning,
  faHamburger, faStarHalfAlt, faCheckCircle, faShoppingBag, faTruck, faBoxOpen,
  faBalanceScale, faMinusCircle, faBullseye, faSmile, faHeart, faThumbsUp, faHandshake, faMugHot);

// sweetalert buttons
const options = {
  confirmButtonColor: '#068d68',
  cancelButtonColor: '#ff7674',
};
createApp(App)
  .component('fa', FontAwesomeIcon).use(VueSweetalert2, options)
  .use(Toaster)
  .use(store)
  .use(router)
  .mount('#app');
