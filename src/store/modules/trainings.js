import TrainingService from '@/services/training-service';

export const state = {
  trainings: [],
};
export const actions = {
  saveTraining(context, payload) {
    TrainingService.postTrainingRequest(payload);
  },
  fetchAllTrainings({ commit }) {
    TrainingService.getTrainingBookings().then((response) => {
      commit('ADD_ALL_TRAININGS', response.data);
    })
      .catch((error) => console.log(error));
  },
};
export const mutations = {
  ADD_ALL_TRAININGS(state, trainings) {
    state.trainings = trainings;
  },
};
