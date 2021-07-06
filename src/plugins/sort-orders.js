import * as date from './date';

export const incoming = (arr) => {
  const incomingArr = [];
  arr.forEach((order) => {
    const createdAt = date.extractDate(order.createdAt);
    const todayDate = date.today().date;
    const todayMonth = date.today().month;
    const createdAtMonth = date.extractMonth(order.createdAt) - 1;
    const difference = todayDate - createdAt;
    if (createdAtMonth === todayMonth) {
      if (difference >= 0 && difference <= 3) {
        incomingArr.push(order);
      }
    }
  });
  // Sort array in ascending order.
  incomingArr.sort((a, b) => {
    const orderA = date.extractDate(a.createdAt);
    const orderB = date.extractDate(b.createdAt);
    return orderB - orderA;
  });
  return incomingArr;
};

export const delivered = (arr) => {
  const deliveredArr = [];
  const pendingDeliveryArr = [];
  arr.forEach((order) => {
    if (order.delivered) {
      deliveredArr.push(order);
    } else {
      pendingDeliveryArr.push(order);
    }
  });
  return { deliveredArr, pendingDeliveryArr };
};
