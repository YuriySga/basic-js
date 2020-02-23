module.exports = function countCats(arr) {  
  let cat = 0;
  arr.forEach(function(item) {        
    if (Array.isArray(item)) {                 
      item.forEach( function (item1) {                
        if (item1==='^^') {cat += 1;}                
      });  
    } else if (item==='^^') {cat += 1;}        
  }); 
  return(cat);
} 