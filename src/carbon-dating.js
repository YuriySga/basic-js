const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(x) {  
  if (typeof x !== "string") return false;
  x = parseFloat(x);
  if (Boolean(x) === false) return false;
  if (x > 0 && x < 15) return Math.ceil(((Math.log(15 / x)) / (0,693 / HALF_LIFE_PERIOD))*1000);
  else return false;
}
