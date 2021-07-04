import { createStore } from 'vuex';
import * as activities from './modules/activities';
import * as accomodations from './modules/accomodations';
import * as foods from './modules/foods';
import * as reviews from './modules/reviews';
import * as projects from './modules/projects';
import * as processing from './modules/coffee-processing';

export default createStore({
  modules: {
    activities,
    accomodations,
    foods,
    reviews,
    projects,
    processing,
  },
});
