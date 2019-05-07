// write your code below!

function happyHolidays() {
  return "Happy holidays!";
}

console.log(String(happyHolidays()));

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

console.log(happyHolidaysTo("Le Hoang"));

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}

console.log(happyHolidayTo("X-Mas", "Le Hoang"));

function holidayCountDown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}

console.log(holidayCountDown("X-Mas", 30));