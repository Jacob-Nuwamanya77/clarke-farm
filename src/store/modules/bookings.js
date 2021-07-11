import * as SortGuests from '@/plugins/sort-guests';

export const state = {
  bookings: [
    {
      name: 'jacob nuwamanya',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-04',
      checkout: '2021-07-10',
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
      checkin: '2021-07-08',
      checkout: '2021-07-10',
      accomodation: 'container',
      guestNumber: '1',
      requests: '',
    },
    {
      name: 'stephen mwanika',
      email: 'stephenmwanika@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-07',
      checkout: '2021-07-10',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'marieh musiimenta',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-04',
      checkout: '2021-07-06',
      accomodation: 'container',
      guestNumber: '1',
      requests: '',
    },
    {
      name: 'emmanuel kodwo',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-05',
      checkout: '2021-07-08',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'benjamin otim',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-06',
      checkout: '2021-07-08',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'ismail asega',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-08',
      checkout: '2021-07-12',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'samuel okwalinga',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-04',
      checkout: '2021-07-08',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'liz kamugisha',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-09',
      checkout: '2021-07-16',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'pauline nalwanga',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-07-10',
      checkout: '2021-07-16',
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
    return SortGuests.currentWeekGuests(state.bookings);
  },
};
