import ActivityService from '@/services/activity-service';

export const state = {
  foods: [
    {
      title: 'Steamed Matooke',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'Boo',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'Pilau Masala',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'Luwombo',
      description: 'Enjoy the best coffee in the land',
      priced: 'Yes',
      currency: '$',
      cost: '5.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'Katogo',
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
