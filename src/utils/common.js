export function getDateFunction() {
  let date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "March",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December",
  ];
  const year = date.getFullYear();
  const monthInNo = date.getMonth() + 1;
  const month = months[date.getMonth() + 1];
  date = date.getDate();
  return { date, month, year, monthInNo };
}
