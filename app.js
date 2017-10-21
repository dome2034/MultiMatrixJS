var Multiply = require('./Multiply');

multiply = new Multiply();

var Matrix1 = [
    [0,1,2],
    [3,4,5]
];
var Matrix2 = [
    [1,1,1,1],
    [1,2,3,4],
    [2,3,4,5]
];
var Matrix3 = [
    [1],
    [1],
    [2],
    [3],
];

console.log(multiply.multiplyMatrix(Matrix1,Matrix2));
