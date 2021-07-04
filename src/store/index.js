import { createStore } from 'vuex';
import * as activities from './modules/activities';
import * as accomodations from './modules/accomodations';
import * as foods from './modules/foods';
import * as reviews from './modules/reviews';

export default createStore({
  modules: {
    activities,
    accomodations,
    foods,
    reviews,
  },
});
