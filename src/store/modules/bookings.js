import * as SortGuests from '@/plugins/sort-guests';

export const state = {
  bookings: [
    {
      name: 'jacob nuwamanya',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-12',
      checkout: '2021-07-15',
      accomodation: 'container',
      guestNumber: '3',
      requests: '',
    },
    {
      name: 'mariat ndagire',
      email: 'mariatndagire28@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-11',
      checkout: '2021-07-15',
      accomodation: 'container',
      guestNumber: '3',
      requests: '',
    },
    {
      name: 'mercy wamanga',
      email: 'mercywamanga@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-12',
      checkout: '2021-07-16',
      accomodation: 'container',
      guestNumber: '1',
      requests: '',
    },
    {
      name: 'stephen mwanika',
      email: 'stephenmwanika@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-13',
      checkout: '2021-07-20',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'marieh musiimenta',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-13',
      checkout: '2021-07-20',
      accomodation: 'container',
      guestNumber: '1',
      requests: '',
    },
    {
      name: 'emmanuel kodwo',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-14',
      checkout: '2021-07-18',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'benjamin otim',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-14',
      checkout: '2021-07-20',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'ismail asega',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-14',
      checkout: '2021-07-20',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'samuel okwalinga',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-15',
      checkout: '2021-07-23',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'liz kamugisha',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-15',
      checkout: '2021-07-23',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'pauline nalwanga',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-16',
      checkout: '2021-07-27',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'sylvia boonabana',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-17',
      checkout: '2021-07-27',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
  ],
};

export const getters = {
  sortIncomingGuests(state) {
    return SortGuests.incoming(state.bookings);
  },
  sortCheckOutGuests(state) {
    return SortGuests.checkout(state.bookings);
  },
  sortCurrentWeekGuests(state) {
    const weeklyGuests = SortGuests.currentWeekGuests(state.bookings);
    return SortGuests.guestTotalByDay(weeklyGuests);
  },
};
