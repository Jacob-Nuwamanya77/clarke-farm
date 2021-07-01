import ActivityServices from '@/services/activities-services';

export const state = {
  activities: [],
};

export const mutations = {
  ADD_ACTIVITIES(state, activities) {
    state.activities = activities;
  },
};

export const actions = {
  getActivities({ commit }) {
    ActivityServices.getActivities()
      .then((response) => {
        const { activities } = response.data;
        commit('ADD_ACTIVITIES', activities);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
