function getSleepHours(day) {
  switch (day.toLowerCase()) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 4;
      break;
    case "saturday":
      return 3;
      break;
    case "sunday":
      return 2;
      break;
  }
}

const getActualSleepHours = () => {
  let sum = 0;
  sum += getSleepHours("monday");
  sum += getSleepHours("tuesday");
  sum += getSleepHours("wednesday");
  sum += getSleepHours("thursday");
  sum += getSleepHours("friday");
  sum += getSleepHours("saturday");
  sum += getSleepHours("sunday");
  return sum;
};

const getIdealSleepHours = () => 5 * 7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needes, LOL");
  } else {
    console.log(
      "You got less than the ideal amount of sleep, YOU FUCKING CHAD"
    );
  }
  console.log(actualSleepHours - idealSleepHours);
};
calculateSleepDebt();