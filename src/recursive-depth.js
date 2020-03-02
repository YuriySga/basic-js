module.exports = class DepthCalculator {  
    calculateDepth(arr) {
        if (!Array.isArray(arr)) return 0;    
        else return 1 + arr.reduce((prev, current) => Math.max(this.calculateDepth(current), prev), 0);     
    }    
};

/* calculateDepth(arr, deep = 1, arr1 = []) {   
    arr1.push(deep);
    arr.forEach(item => {
        if (Array.isArray(item)) {            
            this.calculateDepth(item, deep+1, arr1);
        }
    });
    return arr1.sort( (a, b) => b - a )[0];        
} */