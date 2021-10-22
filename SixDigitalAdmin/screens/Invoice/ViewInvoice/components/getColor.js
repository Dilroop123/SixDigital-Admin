export const getColor = status => {
  if (status === 'Unpaid') {
    return 'rgba(248, 148, 6,1)';
  }
  if (status === 'Overdue') {
    return 'rgba(207, 0, 15,1)';
  }
  if (status === 'Paid') {
    return 'rgba(38, 166, 91,1)';
  }
};
