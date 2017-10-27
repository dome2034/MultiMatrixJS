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

let Result = multiply.multiplyMatrix(Matrix1,Matrix2);

for(let i=0;i<Result.length;i++){
    let Test = "";
    for(let j=0;j<Result[0].length;j++){
        Test = Test+" "+ Result[i][j]
    }
    console.log(Test);
}

