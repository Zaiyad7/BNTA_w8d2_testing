const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a,b){
    return a * b;
};

const divide = function(a,b){
    return a/b;
};

const modulus = function(a,b){
    return a % b;
};

const even = function(a){
    if(a % 2 == 0){
        console.log("number is even");
    } else {
        console.log("number is odd");
    }
};

const odd = function(b){
    if(a % 2 != 0){
        console.log("number is odd");
    } else {
        console.log("number is even");
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
