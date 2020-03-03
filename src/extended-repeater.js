module.exports = function repeater(str, ob) {    
        let strRep = "";
        let myAddit = "";
        ob.repeatTimes = (ob.repeatTimes === undefined) ? 1 : ob.repeatTimes; 
        ob.separator = (ob.separator === undefined) ? '+' : ob.separator; 
        ob.addition = (ob.addition === undefined) ? '' : ob.addition; 
        ob.additionRepeatTimes = (ob.additionRepeatTimes === undefined) ? 1 : ob.additionRepeatTimes; 
        ob.additionSeparator = (ob.additionSeparator === undefined) ? '' : ob.additionSeparator;
      
        if (ob.additionRepeatTimes !== 0) {
            while (ob.additionRepeatTimes > 0) {
                ob.additionRepeatTimes -= 1;
                myAddit = myAddit + ob.addition;
                if (ob.additionRepeatTimes > 0) {
                    myAddit = myAddit + ob.additionSeparator;
                }
            }
        }     
     
        while (ob.repeatTimes > 0) {
            ob.repeatTimes -= 1;
            strRep = strRep + str + myAddit;
            if (ob.repeatTimes > 0) {
                strRep = strRep + ob.separator;
            }
        }   
         
    return strRep;
     
};
  