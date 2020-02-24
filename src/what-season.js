module.exports = function getSeason(date) { 
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error;
  if (date.getMonth() > 1 && date.getMonth() < 5) return "spring";
  if (date.getMonth() > 4 && date.getMonth() < 8) return "summer";
  if (date.getMonth() > 7 && date.getMonth() < 11) return "fall";
  if (date.getMonth() < 2 || date.getMonth() == 11) return "winter";
  else return 'Unable to determine the time of year!';
};
