import * as SortOrders from '@/plugins/sort-orders';

export const state = {
  orders: [
    {
      name: 'jacob nuwamanya',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      package: 'Paper bag',
      order: '50',
      requests: '',
      createdAt: '2021-07-11',
      delivered: false,
    },
    {
      name: 'mercy wamanga',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      package: 'Paper bag',
      order: '50',
      requests: '',
      createdAt: '2021-07-12',
      delivered: true,
    },
    {
      name: 'mariat ndagire',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      package: 'Sack',
      order: '50',
      requests: '',
      createdAt: '2021-07-12',
      delivered: true,
    },
    {
      name: 'stephen mwanika',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      package: 'Paper bag',
      order: '50',
      requests: '',
      createdAt: '2021-07-13',
      delivered: true,
    },
    {
      name: 'marieh musiimenta',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      package: 'Paper bag',
      order: '50',
      requests: '',
      createdAt: '2021-07-14',
      delivered: true,
    },
    {
      name: 'emmanuel kodwo',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      package: 'Sack',
      order: '150',
      requests: '',
      createdAt: '2021-07-16',
      delivered: true,
    },
    {
      name: 'emmanuel kodwo',
      email: 'nuwamanyajacob@gmail.com',
      phone: '0784246950',
      package: 'Sack',
      order: '150',
      requests: '',
      createdAt: '2021-07-17',
      delivered: true,
    },
  ],
};

export const getters = {
  sortIncomingOrders(state) {
    return SortOrders.incoming(state.orders);
  },
  sortDeliveredOrders(state) {
    return SortOrders.delivered(state.orders).deliveredArr;
  },
  sortPendingOrders(state) {
    return SortOrders.delivered(state.orders).pendingDeliveryArr;
  },
  sortCurrentWeekOrders(state) {
    const orders = SortOrders.currentWeekOrders(state.orders);
    return SortOrders.orderTotalByDay(orders);
  },
};
