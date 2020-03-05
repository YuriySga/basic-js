class VigenereCipheringMachine {  

    constructor(mod = "true") {
        this.mod = mod;
    }
        
    encrypt(message, key) {           
        let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let abcArr = abc.split('');
        let keyArr = key.toUpperCase().split('');
        let messageArr = message.toUpperCase().split('');
        let code = [];        
        while (keyArr.length < messageArr.length) {
            keyArr = keyArr.concat(keyArr);
            }
            
        let newKey =[];
        let k = 0; //поправочный коэффициент на пробелы;  
        messageArr.forEach(function(item, index, array) {
            if (item == " ") {
                newKey.push(" ");
                k -= 1;
            } else {       
                newKey.push(keyArr[index + k]);
                }        
            });       
        
        messageArr.forEach(function(item, index, array) {
            if (item === " " || item.charCodeAt(0) < 65 || item.charCodeAt(0) > 90) { 
               code.push(item);
            } else {
                code.push(abcArr[abcArr.indexOf(newKey[index]) + abcArr.indexOf(item)]);
            } 
        });
        if (this.mod === "true") return code.join('');
        code.reverse();
        return code.join('');
    }

    decrypt(encryptedMessage, key) {        
        let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let abcArr = abc.split('');
        let keyArr = key.toUpperCase().split('');
        let encryMessageArr = encryptedMessage.toUpperCase().split('');
        let code = [];
        while (keyArr.length < encryMessageArr.length) {
            keyArr = keyArr.concat(keyArr);
        }   

        let newKey =[];
        let k = 0; //поправочный коэффициент на пробелы;
        encryMessageArr.forEach(function(item, index, array) {
            if (item == " ") {
                newKey.push(" ");
                k -= 1;
            } else {       
                newKey.push(keyArr[index + k]);
            }        
        }); 

        encryMessageArr.forEach(function(item, index, array) {
            if (item === " " || item.charCodeAt(0) < 65 || item.charCodeAt(0) > 90) { 
                code.push(item);
            } else {
                code.push(abcArr[abcArr.indexOf(item) + 26 - abcArr.indexOf(newKey[index])]);
            } 
        });

        if (this.mod === "true") return code.join('');
        code.reverse();
        return code.join('');        
    }
}

module.exports = VigenereCipheringMachine;
