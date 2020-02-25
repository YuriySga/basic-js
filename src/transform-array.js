module.exports = function transform(arr) {
   if (Array.isArray(arr) !== true) throw new Error();
   let newArr = [] ;
   let command = "";    // next command
   arr.forEach((element, index) => {
    if (index == 0) {   // if first element of array
        if (element !== '--discard-prev' && element !== '--double-prev') {
            if (element === '--double-next' || element === '--discard-next') {
                command = element;
            } else {newArr.push(element);}           
        }
    } else {          // if NOT first element of array
        if (element !== '--discard-prev' && element !== '--double-prev' && element !== '--double-next' && element !== '--discard-next') {
            if (command == "") {
                newArr.push(element);
            } else if (command == "--double-next") {
                newArr.push(element);
                newArr.push(element);
                command = "";
            }  else if (command == "--discard-next") {
                command = "";
            }
        } else {
            if (element === '--discard-prev') {
                newArr.pop();
                command = "";
            } else if (element === '--double-prev') {
                newArr.push(arr[index-1]);
                command = "";
            } else if (element === '--double-next' || element === '--discard-next') {
                command = element;                
            }
        }
    }  
   });
return newArr;
};