import * as date from './date';

export const checkout = (arr) => {
  const checkoutArr = [];
  arr.forEach((booking) => {
    const checkout = date.extractDate(booking.checkout);
    const todayDate = date.today().date;
    const todayMonth = date.today().month;
    const visitMonth = date.extractMonth(booking.checkin) - 1;
    const difference = checkout - todayDate;
    if (visitMonth === todayMonth) {
      if (difference === 0) {
        checkoutArr.push(booking);
      }
    }
  });
  return checkoutArr;
};

export const incoming = (arr) => {
  const incomingArr = [];
  arr.forEach((booking) => {
    const checkin = date.extractDate(booking.checkin);
    const todayDate = date.today().date;
    const todayMonth = date.today().month;
    const visitMonth = date.extractMonth(booking.checkin) - 1;
    const difference = checkin - todayDate;
    if (visitMonth === todayMonth) {
      if (difference >= 0 && difference <= 2) {
        incomingArr.push(booking);
      }
    }
  });
  // Sort array in ascending order.
  incomingArr.sort((a, b) => {
    const checkinA = date.extractDate(a.checkin);
    const checkinB = date.extractDate(b.checkin);
    return checkinA - checkinB;
  });
  return incomingArr;
};
