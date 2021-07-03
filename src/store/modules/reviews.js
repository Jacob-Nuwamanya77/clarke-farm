import ActivityService from '@/services/activity-service';

export const state = {
  reviews: [
    {
      name: 'jacob nuwamanya',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      name: 'mercy wamanga',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      name: 'mariat ndagire',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      name: 'stephen mwanika',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      name: 'marieh musiimenta',
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
