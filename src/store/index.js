import { createStore } from 'vuex';
import * as activities from './modules/activities';

export default createStore({
  modules: {
    activities,
  },
});
