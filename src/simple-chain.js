const chainMaker = {
  arrChain: [],        
  getLength() {               //возвращает текущую длину цепочки в виде числа;
    return this.arrChain.length;
  },
  addLink(value = "") {            //добавляет в цепочку ссылку, содержащую строковое представление значения;
    value = String(value);
    if (value == "function () {}") {value = "function() {}";}    
    this.arrChain.push(value);
    return this;
  },
  removeLink(position) {       //удаляет звено цепи в указанном положении;    
    if (typeof position !== "number") {
      this.arrChain = [];
      throw new Error();
    }
    position = position - 1;
    if (position < 0 || position > this.arrChain.length - 1) {
      this.arrChain = [];
      throw new Error();
    }
    if (position % 1 != 0) {
      this.arrChain = [];
      throw new Error();
    }
    let arrTemp = [];
    this.arrChain.forEach((item, index) => {
        if (index == position) {  
            //nop;
        } else {
            arrTemp.push(item);
        }
    });
    this.arrChain = arrTemp;
    return this;
  },
  reverseChain() {            //в обратном направлении цепь;
   this.arrChain.reverse();
   return this;
  },
  finishChain() {            //завершает цепочку и возвращает ее.
    let str = ``;
    this.arrChain.forEach((element, index) => {
        if (index == 0) {
            str = '( '+ element + ' )';
        } else {
            str = str + '~~' + '( ' + element + ' )';
        }     
    });    
    this.arrChain = [];
    return str;    
  }
};

module.exports = chainMaker;
