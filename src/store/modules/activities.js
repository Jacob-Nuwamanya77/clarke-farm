import ActivityService from '@/services/activity-service';

export const state = {
  activities: [
    {
      title: 'coffee tasting',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'bouldering',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'biking',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'forest walk',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
  ],
};

export const actions = {
  saveActivity(context, payload) {
    ActivityService.postActivity(payload);
  },
  async fetchAll({ commit }) {
    const activities = await ActivityService.getActivities();
    commit('ADD_ALL_ACTIVITIES', activities.data);
  },

};

export const mutations = {
  ADD_ALL_ACTIVITIES(state, activities) {
    state.activities = activities;
  },

};

export const getters = {
  allActivities: (state) => state.activities,
};
