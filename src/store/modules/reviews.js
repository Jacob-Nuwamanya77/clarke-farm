import ActivityService from '@/services/activity-service';

export const state = {
  reviews: [
    {
      name: 'jacob nuwamanya',
      review: 'This is Jacob Nuwamanya and I loved my experience. Explore the largest rock garden in Uganda, marked river trails, guided farm rides in our jeeps (ATV), delicious local cuisines and embrace the culture while enjoying freshly roasted coffee from the farm.',
      period: 'May 2020',
    },
    {
      name: 'mercy wamanga',
      review: 'Mercy here, loved every bit of it',
      period: 'July 2021',
    },
    {
      name: 'mariat ndagire',
      review: 'Asalamu aleikumu, visit clarke farm and you will love the experience',
      period: 'August 2020',
    },
    {
      name: 'stephen mwanika',
      review: 'An active lifestyle is what you should expect',
      period: 'March 2021',
    },
    {
      name: 'marieh musiimenta',
      review: 'Well, it was one of a kind experience and you should all experience this.',
      period: 'October 2020',
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
