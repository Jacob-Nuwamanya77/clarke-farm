import { createStore } from 'vuex';
import ActivityServices from '@/services/activities-services';

export default createStore({
  state: {
    activities: [],
  },
  mutations: {
    ADD_ACTIVITIES(state, activities) {
      state.activities = activities;
    },
  },
  actions: {
    getActivities({ commit }) {
      ActivityServices.getActivities()
        .then((response) => {
          commit('ADD_ACTIVITIES', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
