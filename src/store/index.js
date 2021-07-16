import { createStore } from 'vuex';
import * as activities from './modules/activities';
import * as accomodations from './modules/accomodations';
import * as foods from './modules/foods';
import * as reviews from './modules/reviews';
import * as projects from './modules/projects';
import * as bookings from './modules/bookings';
import * as orders from './modules/orders';
<<<<<<< HEAD
import * as trainees from './modules/trainees';
=======
import * as trainings from './modules/training-categories';
import * as processing from './modules/processing-guide';
>>>>>>> 016b1a4a51f81e631f31ee0472b258337b2f8088

export default createStore({
  modules: {
    activities,
    accomodations,
    foods,
    reviews,
    projects,
    bookings,
    orders,
<<<<<<< HEAD
    trainees,
=======
    trainings,
    processing,
>>>>>>> 016b1a4a51f81e631f31ee0472b258337b2f8088
  },
});
