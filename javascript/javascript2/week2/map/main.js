// Map function

//  The map() method creates a New Array with the Results of calling a provided function on every element in this array.
//  Takes an array and a function
//  Applies the function to every element in the array
//  Applies the function to every element in the array
//  Keeps track of the results of each successive function call
//  Returns a new array containing these results

console.log('it works!');

const arr = [2, 3, 5,]

function add(el){
  return el+2;
}

const result = arr.map(add);



console.log(result);

console.log(arr);

////////
const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'red' },
  { flavor: 'watermelon', color: 'red' },
  { flavor: 'kiwi', color: 'green' },
  { flavor: 'mango', color: 'yellow' },
  { flavor: 'pear', color: 'green' }
];

const resultFlavors = iceCreams.map(function(ic){
  return "My favorite flavors " + ic.flavor;
})
console.log(resultFlavors)

