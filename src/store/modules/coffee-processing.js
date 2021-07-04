import ActivityService from '@/services/activity-service';

export const state = {
  processing: [
    {
      title: 'mother garden',
      description: 'Our mother garden consists of a variety of coffee seedlings. We have all 7 lines of coffee wilt disease resistant varieties and the traditional clones A-F.',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'cherry picking',
      description: 'Our mother garden consists of a variety of coffee seedlings. We have all 7 lines of coffee wilt disease resistant varieties and the traditional clones A-F.',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'wet washing',
      description: 'Our mother garden consists of a variety of coffee seedlings. We have all 7 lines of coffee wilt disease resistant varieties and the traditional clones A-F.',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'forest walk',
      description: 'Enjoy the best coffee in the land',
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
