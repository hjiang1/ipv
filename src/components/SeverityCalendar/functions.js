export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const dayNames = [
  { long: "Sunday", short: "Sun" },
  { long: "Monday", short: "Mon" },
  { long: "Tuesday", short: "Tue" },
  { long: "Wednesday", short: "Wed" },
  { long: "Thursday", short: "Thu" },
  { long: "Friday", short: "Fri" },
  { long: "Saturday", short: "Sat" },
]

export const getFirstDayOfMonth = (
  month = new Date().getMonth(),
  year = new Date().getFullYear()
) => new Date(year, month, 1).getDay()

export const getDaysInMonth = (
  month = new Date().getMonth(),
  year = new Date().getFullYear()
) => new Date(year, month + 1, 0).getDate()

export const isDateToday = date => {
  const todayDate = new Date()
  return (
    date.getFullYear() === todayDate.getFullYear() &&
    date.getMonth() === todayDate.getMonth() &&
    date.getDate() === todayDate.getDate()
  )
}

export const areDatesTheSame = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}
