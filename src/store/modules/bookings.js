export const state = {
  bookings: [
    {
      name: 'jacob nuwamanya',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      checkin: '2021-July-06',
      checkout: '2021-July-10',
      accomodation: 'container',
      guestNumber: '3',
      requests: '',
    },
    {
      name: 'mariat ndagire',
      email: 'mariatndagire28@gmail.com',
      phone: '0784246950',
      checkin: '2021-July-07',
      checkout: '2021-July-10',
      accomodation: 'container',
      guestNumber: '3',
      requests: '',
    },
    {
      name: 'mercy wamanga',
      email: 'mercywamanga@gmail.com',
      phone: '0784246950',
      checkin: '2021-July-08',
      checkout: '2021-July-10',
      accomodation: 'container',
      guestNumber: '1',
      requests: '',
    },
    {
      name: 'stephen mwanika',
      email: 'stephenmwanika@gmail.com',
      phone: '0784246950',
      checkin: '2021-July-07',
      checkout: '2021-July-10',
      accomodation: 'container',
      guestNumber: '2',
      requests: '',
    },
    {
      name: 'marieh musiimenta',
      email: 'mariehmusiimenta@gmail.com',
      phone: '0784246950',
      checkin: '2021-July-08',
      checkout: '2021-July-10',
      accomodation: 'container',
      guestNumber: '1',
      requests: '',
    },
  ],
};

export const getters = {
  sortIncomingAndCheckout(state) {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const incoming = [];
    const outgoing = [];
    state.bookings.forEach((booking) => {
      const checkin = Number(booking.checkin.substr(booking.checkin.length - 2, 2));
      const checkout = Number(booking.checkout.substr(booking.checkout.length - 2, 2));
      const visitMonth = booking.checkin.substr(5, 3);
      if (month === visitMonth && checkin - date <= 2) {
        incoming.push(booking);
      }
      if (month === visitMonth && checkout - date === 0) {
        outgoing.push(booking);
      }
    });
    console.log(incoming);
    console.log(outgoing);
  },
};
