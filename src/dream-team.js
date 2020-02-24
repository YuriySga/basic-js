module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr) !== true) return false;
  let x = [];
  arr.forEach(element => {
    if (typeof element == "string") {            
      element= element.trim();                   
      x.push(element[0].toUpperCase());
    }    
  });
  x.sort( (a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  x = x.join("");
  return x;  
};