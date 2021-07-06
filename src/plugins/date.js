export const today = () => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  return {
    day, date, month, year,
  };
};

export const dayInText = (index) => {
  const day = [];
  day[0] = 'Sun';
  day[1] = 'Mon';
  day[2] = 'Tue';
  day[3] = 'Wed';
  day[4] = 'Thu';
  day[5] = 'Fri';
  day[6] = 'Sat';
  return day[index];
};

export const monthInText = (index) => {
  const month = [];
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';
  return month[index];
};

export const extractDate = (value) => {
  // Format yyyy-mm-dd
  const date = Number(value.substr(value.length - 2, 2));
  return date;
};

export const extractMonth = (value) => {
  // Format yyyy-mm-dd
  const month = Number(value.substr(5, 2));
  return month;
};

export const extractDay = (value) => {
  const date = new Date(value);
  return dayInText(date.getDay());
};
