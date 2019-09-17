/**
 * Create a function which returns an object with two methods:
 * 1. multiply -> multiply current value by given number
 * 2. get -> return current value
 */

function myFactory() {
  let value = 1;
  
  return {
    multiplier : (num) => value =value * num,
    get :()=> value
  };
}

const multiplier = myFactory();
multiplier.multiplier(123);
multiplier.multiplier(5);
console.log(multiplier.get());


//  in sample ro tuye filme class check kon