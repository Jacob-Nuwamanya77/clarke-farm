import ActivityService from '@/services/activity-service';

export const state = {
  accomodations: [
    {
      title: 'hill top house',
      description: 'Majestic views',
      priced: 'Yes',
      currency: '$',
      cost: '150.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'Container House',
      description: 'Self contained home away from home',
      priced: 'Yes',
      currency: '$',
      cost: '150.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'Cottages',
      description: 'Wooden cottages at the hilltop over looking the entire farm',
      priced: 'Yes',
      currency: '$',
      cost: '200.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
    {
      title: 'Tents',
      description: 'Outdoor living at its best',
      priced: 'Yes',
      currency: '$',
      cost: '50.00',
      image: '@/assets/images/coffeetasting1.jpg',
    },
  ],
};

export const actions = {
  saveAccomodation(context, payload) {
    ActivityService.postActivity(payload);
  },
  async fetchAll({ commit }) {
    const activities = await ActivityService.getActivities();
    commit('ADD_ALL_ACTIVITIES', activities.data);
  },
};

export const mutations = {
  ADD_ACTIVITY(state, activity) {
    state.activity = activity;
  },
  ADD_ALL_ACTIVITIES(state, activities) {
    state.activities = activities;
  },
};
