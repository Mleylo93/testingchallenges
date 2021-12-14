const { object } = require("webidl-conversions");

const add= (num1, num2)=>{
    return num1 +num2;
}

let myArray= ["Dan", "Stuart","Ben"];

let nullTest="marc";

let truthyTest=1;

let notFalsy=1;

const myCar={
    make:'Ford',
    model:'Mustang'
    
};

exports.add=add
exports.myArray=myArray
exports.nullTest=nullTest
exports.truthyTest=truthyTest
exports.notFalsy=notFalsy
exports.myCar=myCar
