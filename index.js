const readline = require("readline-sync");

const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes, seconds] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  minutes = parseInt(minutes, 10) + 45;
  seconds = parseInt(seconds, 10) + 45;
  return `${hours}:${minutes}:${seconds}`;
};

let time = readline.question();
var convertedTime = convertTime12to24(time);
console.log(convertedTime);
