import { createStore } from 'vuex';
import * as reviews from './modules/reviews';
import * as projects from './modules/projects';
import * as bookings from './modules/bookings';
import * as orders from './modules/orders';

export default createStore({
  modules: {
    reviews,
    projects,
    bookings,
    orders,
  },
});
