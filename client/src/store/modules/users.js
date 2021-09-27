export const state = {
  user: null,
  isAuthenticated: !!sessionStorage.getItem('access_token'),
};
export const actions = {
  authenticateUser({ commit }, user) {
    commit('SET_USER', user);
    commit('SET_AUTHENTICATION', true);
  },
  logOutUser({ commit }) {
    commit('SET_USER', null);
    commit('SET_AUTHENTICATION', false);
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('user');
  },
};
export const mutations = {
  SET_AUTHENTICATION(state, authentication) {
    state.isAuthenticated = authentication;
  },
  SET_USER(state, user) {
    state.user = user;
  },
};
