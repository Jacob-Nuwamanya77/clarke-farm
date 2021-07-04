import ActivityService from '@/services/activity-service';

export const state = {
  projects: [
    {
      title: 'Coffee',
      description: '750 acres of robusta coffee and currently harvesting 700,000 kilograms annually.',
      image: '../assets/images/mother-garden.jpg',
    },
    {
      title: 'Tourism',
      description: '500 acres of conservation projects.',
      image: '../assets/images/mother-garden.jpg',
    },
    {
      title: 'Eucalyptus',
      description: '750 acres of robusta coffee and currently harvesting 700,000 kilograms annually.',
      image: '../assets/images/mother-garden.jpg',
    },
    {
      title: 'Bamboo',
      description: '750 acres of robusta coffee and currently harvesting 700,000 kilograms annually.',
      image: '../assets/images/mother-garden.jpg',
    },
    {
      title: 'Education',
      description: '750 acres of robusta coffee and currently harvesting 700,000 kilograms annually.',
      image: '../assets/images/mother-garden.jpg',
    },
    {
      title: 'Community Service',
      description: '750 acres of robusta coffee and currently harvesting 700,000 kilograms annually.',
      image: '../assets/images/mother-garden.jpg',
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
