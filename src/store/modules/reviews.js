import ReviewService from '@/services/review-service';

export const state = {
  reviews: [
    {
      name: 'jacob nuwamanya',
      review: 'This is Jacob Nuwamanya and I loved my experience. Explore the largest rock garden in Uganda',
      period: 'May 2020',
    },
    {
      name: 'mercy wamanga',
      review: 'Mercy here, loved every bit of it',
      period: 'July 2021',
    },
    {
      name: 'mariat ndagire',
      review: 'Asalamu alaikumu, visit clarke farm and you will love the experience',
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
  coffeeReviews: [],
  visitorReviews: [],
};

export const actions = {
  async fetchAllCoffeeReviews({ commit }, type) {
    const reviews = await ReviewService.getReviews(type);
    const verifiedReviews = [];
    const unverifiedReviews = [];
    reviews.data.forEach((review) => {
      if (review.verified === true) {
        verifiedReviews.push(review);
      } else {
        unverifiedReviews.push(review);
      }
    });
    commit('ADD_ALL_COFFEE_REVIEWS', verifiedReviews);
    return unverifiedReviews;
  },
  async fetchAllVisitorReviews({ commit }, type) {
    const reviews = await ReviewService.getReviews(type);
    const verifiedReviews = [];
    const unverifiedReviews = [];
    reviews.data.forEach((review) => {
      if (review.verified === true) {
        verifiedReviews.push(review);
      } else {
        unverifiedReviews.push(review);
      }
    });
    commit('ADD_ALL_VISITOR_REVIEWS', verifiedReviews);
    return unverifiedReviews;
  },
  commitCoffeeReviews({ commit }, payload) {
    commit('ADD_ALL_COFFEE_REVIEWS', payload);
  },
  commitVisitorReviews({ commit }, payload) {
    commit('ADD_ALL_VISITOR_REVIEWS', payload);
  },
};

export const mutations = {
  ADD_ALL_COFFEE_REVIEWS(state, reviews) {
    state.coffeeReviews = [...state.coffeeReviews, ...reviews];
  },
  ADD_ALL_VISITOR_REVIEWS(state, reviews) {
    state.visitorReviews = [...state.visitorReviews, ...reviews];
  },
};
